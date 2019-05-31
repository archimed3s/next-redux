import React from 'react';
import Table from 'blocks/table';

export default class Index extends React.Component {

	public async componentDidMount() {
		const res = await fetch('/orders');
	}

	public render() {
		return (
			<div>
				<Table />
			</div>
		);
	}
}
