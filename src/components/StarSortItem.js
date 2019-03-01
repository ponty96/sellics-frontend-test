import React from 'react';
import { string, func, bool } from 'prop-types';

export default class StarSortItem extends React.Component {
	static propTypes = {
		isChecked: bool.isRequired,
		onCheckChange: func.isRequired,
		ranking: string.isRequired
	};
	render() {
		const { isChecked, onCheckChange, ranking } = this.props;
		return (
			<React.Fragment>
				<input type="checkbox" defaultChecked={isChecked} onChange={() => onCheckChange(ranking)} />
				<span>
					{ranking}
					<i className="mdi mdi-star" />
				</span>
			</React.Fragment>
		);
	}
}
