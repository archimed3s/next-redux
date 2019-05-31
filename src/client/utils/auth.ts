import auth0 from 'auth0-js';
import Cookie from 'js-cookie';
import jwtDecode from 'jwt-decode';

const CONFIG = {
	AUTH0_CLIENT_DOMAIN: 'pupil-test.eu.auth0.com',
	AUTH0_CLIENT_ID: 'rCpI8H4W35LYoLI5hZbeviPLhOvVvMje',
	AUTH0_AUDIENCE: 'https://api.test.hellopupil.com'
};

const getAuth0 = () => {
	return new auth0.WebAuth({
		clientID: CONFIG.AUTH0_CLIENT_ID,
		domain: CONFIG.AUTH0_CLIENT_DOMAIN,
		audience: CONFIG.AUTH0_AUDIENCE
	});
};

const getBaseUrl = () => `${window.location.protocol}//${window.location.host}`;

const getOptions = () => {
	return {
		responseType: 'token',
		redirectUri: `${getBaseUrl()}/loggedin`,
		scope: 'openid list:order list:job get:order get:job'
	};
};

export const authorize = () => getAuth0().authorize(getOptions());
export const logout = () => {
	getAuth0().logout({ returnTo: getBaseUrl() });
	Cookie.remove('accessToken');
};
export const parseHash = (callback) => getAuth0().parseHash(callback);

export const setToken = (idToken, accessToken) => {
	if (!process.browser) {
		return;
	}
	Cookie.set('idToken', idToken);
	Cookie.set('accessToken', accessToken);
};
