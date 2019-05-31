import {Component, ReactNode} from 'react';
import {logout} from './utils';

class Logout extends Component {
	public componentDidMount() {
		logout();
	}

	public render(): ReactNode {
		return null;
	}
}

export default Logout;
