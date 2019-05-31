import auth0 from 'auth0-js';
import Cookies from 'js-cookie';
import store from './storage';

const webAuth = new auth0.WebAuth({
	audience: 'https://api.test.hellopupil.com',
	clientID: 'Ev2HSv3pfUfrlf2SG10nMDXBsB3K4vQr',
	domain: 'pupil-test.eu.auth0.com',
	redirectUri: location.origin + '/dp-dashboard/login',
	responseType: 'token',
	scope: ['openid', 'get:property', 'get:assetPack', 'profile'].join(' ')
});

const stakAuthConfig = {
	connection: 'Username-Password-Authentication',
	logo: '',
	primaryColor: '#ff6c2f',
	title: 'Sign into DP Dashboard'
};

function logout() {
	store.tokenExpiration = null;
	store.accessToken = null;
	Cookies.remove('token');

	webAuth.logout({});
}

function isLoggedIn() {
	const hasToken = store.accessToken !== null;
	const isValid = store.tokenExpiration && store.tokenExpiration > new Date();
	return hasToken && isValid;
}

export {webAuth, stakAuthConfig, logout, isLoggedIn};
