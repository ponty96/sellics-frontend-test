import React from 'react';
import { ReviewItemWrapper, ReviewCard } from '../app.styles';
import { string, array, number, arrayOf, shape } from 'prop-types';
import moment from 'moment';

const range = (start, end) => {
	if (start === end) return [ start ];
	return [ start, ...range(start + 1, end) ];
};

const ReviewItem = ({ reviewCreated, stars, author, title, content }) => (
	<ReviewCard>
		<div className="card-header row middle-xs">
			<div className="item">
				<div className="avatar" />
			</div>
			<div className="col-md-3 col-lg-2 col-sm-2 col-xs-4 item">
				<span>DATE</span>
				<p>{moment(reviewCreated).calendar()}</p>
			</div>
			<div className="col-md-4 col-lg-2 col-sm-3 col-xs-5 item">
				<span>STARS</span>
				<p>
					{range(1, stars).map((item, i) => {
						return <i className="mdi mdi-star" key={i}/>;
					})}
				</p>
			</div>
			<div className="col-md-1 col-lg-6 col-sm-4 col-xs-12 item">
				<span>PERSON</span>
				<p>{author}</p>
			</div>
		</div>
		<h5>{title}</h5>
		<p>{content}</p>
	</ReviewCard>
);
export default class ReviewGroup extends React.Component {
	static propTypes = {
		reviews: arrayOf(
			shape({
				reviewCreated: number.isRequired,
				stars: number,
				content: string.isRequired,
				title: string.isRequired,
				author: string
			}).isRequired
		).isRequired,
		group: string.isRequired
	};
	render() {
		return (
			<ReviewItemWrapper>
				<p className="month">{this.props.group}</p>
				{this.props.reviews.map((review, index) => <ReviewItem key={index} {...review} />)}
			</ReviewItemWrapper>
		);
	}
}
