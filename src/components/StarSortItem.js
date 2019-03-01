import React from 'react';
import { func, number } from 'prop-types';

export default class StarSortItem extends React.Component {
	static propTypes = {
		selectedRating: number.isRequired,
		onCheckChange: func.isRequired,
		rating: number.isRequired
	};
	render() {
		const { selectedRating, onCheckChange, rating } = this.props;
		return (
			<React.Fragment>
				<input
					type="checkbox"
					checked={rating <= selectedRating ? true : false}
					onChange={() => onCheckChange(rating)}
				/>
				<span>
					{rating}
					<i className="mdi mdi-star" />
				</span>
			</React.Fragment>
		);
	}
}
