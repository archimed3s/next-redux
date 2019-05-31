import React from 'react';
import { logout } from '../utils/auth';

export default class Logout extends React.Component {

	public componentDidMount() {
		logout();
	}

	public render() {
		return null;
	}
}
