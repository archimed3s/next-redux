import {Auth0DecodedHash, AuthorizeOptions} from 'auth0-js';
import Cookies from 'js-cookie';
import {Component, ReactNode} from 'react';
import store from './storage';
import {webAuth, stakAuthConfig, isLoggedIn} from './utils';

function hasLoginHash() {
	return location.hash.indexOf('#access_token') === 0;
}

function stashToken(auth: Auth0DecodedHash) {
	if (auth.accessToken && auth.expiresIn) {
		const now = new Date().getTime(),
			timeout = auth.expiresIn * 1000,
			exp = new Date(now + timeout);

		store.tokenExpiration = exp;
		store.accessToken = auth.accessToken;

		setCookies(auth.accessToken, exp);
	} else {
		throw new Error(`Login failed, cannot stash token values from auth=${auth}`);
	}
}

function loginRedirect() {
	window.location.replace('/');
}

function setCookies(accessToken: string, exp: Date) {
	Cookies.set('token', accessToken, {expires: exp});
}

class Login extends Component {
	public componentDidMount() {
		if (isLoggedIn()) {
			setCookies(store.accessToken, store.tokenExpiration);
			loginRedirect();
		} else if (hasLoginHash()) {
			// Is Auth0 redirect
			webAuth.parseHash((err: Error, result: Auth0DecodedHash) => {
				if (err) {
					throw new Error(`Login callback failed, error=${err}`);
				} else {
					stashToken(result);
					loginRedirect();
				}
			});
		} else {
			// Try SSO
			webAuth.checkSession({}, (err, authResult: Auth0DecodedHash) => {
				if (authResult) {
					// SSO worked, store token on subdomain localstorage and cookies
					stashToken(authResult);
					loginRedirect();
				} else if (err && err.error === 'login_required') {
					// SSO returned no session, login manually
					webAuth.authorize({
						...(stakAuthConfig as AuthorizeOptions)
					});
				} else {
					// Something went wrong. Log and abandon flow.
					throw new Error(`SSO error, error=${err}, result=${authResult}`);
				}
			});
		}
	}

	public render(): ReactNode {
		return null;
	}
}

export default Login;
