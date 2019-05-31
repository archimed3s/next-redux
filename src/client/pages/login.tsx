import React from 'react';
import { authorize } from '../utils/auth';

export default class Login extends React.Component {

	public componentDidMount() {
		authorize();
	}

	public render() {
		return null;
	}
}
