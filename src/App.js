import React, { Component } from 'react';
import {
	AppWrapper,
	Button,
	FilterPaneWrapper,
	ReviewsWrapper,
	RatingsFilter,
	Input,
	Select,
	CheckboxWrapper
} from './app.styles';
import ReviewGroup from './components/ReviewItem';
import StarSortItem from './components/StarSortItem';
import { getReviews, groupReviews, filterReviews, sort } from './functions';
import _ from 'lodash';

class App extends Component {
	state = {
		reviews: [],
		hasMore: false,
		page: 1,
		sortType: 'mrf',
		groupBy: '',
		filterBy: 5,
		unParsedApiReviews: []
	};

	async componentDidMount() {
		const { hasMore, reviews } = await getReviews(this.state.page);
		this.setState({
			reviews: this.parseApiResults(reviews),
			hasMore,
			unParsedApiReviews: reviews
		});
	}

	parseApiResults = (reviews) => {
		const filteredReviews = filterReviews(reviews, this.state.filterBy);
		const groupedReviews = groupReviews(filteredReviews, this.state.groupBy);
		return sort(groupedReviews, this.state.sortType, 'key');
	};

	updateState = (key, value) => {
		this.setState({ [key]: value });
	};

	componentDidUpdate(prevProps, prevState) {
		const oldStatePropertiesToCompare = {
			page: prevState.page,
			sortType: prevState.sortType,
			groupBy: prevState.groupBy,
			filterBy: prevState.filterBy,
			unParsedApiReviews: prevState.unParsedApiReviews
		};

		const newStatePropertiesToCompare = {
			page: this.state.page,
			sortType: this.state.sortType,
			groupBy: this.state.groupBy,
			filterBy: this.state.filterBy,
			unParsedApiReviews: this.state.unParsedApiReviews
		};
		if (!_.isEqual(oldStatePropertiesToCompare, newStatePropertiesToCompare)) {
			this.setState({
				reviews: this.parseApiResults(this.state.unParsedApiReviews)
			});
		}
	}

	render() {
		const reviews = this.state.reviews.map((review, i) => {
			return <ReviewGroup reviews={review.reviews} group={review.key} key={i} />;
		});
		return (
			<AppWrapper>
				<div className="col-md-6 col-md-offset-1">
					<FilterPaneWrapper className="row">
						<div className="col-xs-12 col-sm-7 col-md-7 col-lg-7">
							<div className="row">
								<div className="col-xs-12 col-md-12">
									<Input type="text" placeholder="Search" />
								</div>
							</div>
							<div className="row">
								<div className="col-xs-6 col-md-6">
									<Select
										value={this.state.groupBy}
										onChange={(e) => this.updateState('groupBy', e.target.value)}
									>
										<option value="">Group by</option>
										<option value="day">Day</option>
										<option value="week">Week</option>
										<option value="month">Month</option>
										<option value="year">Year</option>
									</Select>
								</div>
								<div className="col-xs-6 col-md-6">
									<Select
										value={this.state.sortType}
										onChange={(e) => this.updateState('sortType', e.target.value)}
									>
										<option value="">Order by</option>
										<option value="mrf">Most recent first</option>
										<option value="mrl">Most recent last</option>
									</Select>
								</div>
							</div>
							<RatingsFilter className="row">
								<div className="col-xs-12 col-md-12">
									<span className="">FILTER BY</span>
									<CheckboxWrapper>
										<StarSortItem ranking="1" />
										<StarSortItem ranking="2" />
										<StarSortItem ranking="3" />
										<StarSortItem ranking="4" />
										<StarSortItem ranking="5" />
									</CheckboxWrapper>
								</div>
							</RatingsFilter>
						</div>
					</FilterPaneWrapper>
					<ReviewsWrapper className="row">
						<div className="col-xs-12 col-md-12">
							<div className="row end-xs">
								<div className="col-xs-12 col-md-12">
									<Button>REFRESH</Button>
								</div>
							</div>
							{reviews}
						</div>
					</ReviewsWrapper>
				</div>
			</AppWrapper>
		);
	}
}

export default App;
