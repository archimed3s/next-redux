import React from 'react';
import Router from 'next/router';
import { parseHash, setToken } from '../utils/auth';

export default class LoggedIn extends React.Component {

	public componentDidMount() {
		parseHash((err, result) => {
			if (err) {
				return;
			}
			setToken(result.idToken, result.accessToken);
			Router.push('/');
		});
	}

	public render() {
		return <p> Logged In </p>;
	}
}
