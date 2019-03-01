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
import { getReviews } from './functions';

class App extends Component {
	state = {
		reviews: [],
		hasMore: false,
		page: 1
	};

	async componentDidMount() {
		const { hasMore, reviews } = await getReviews(this.state.page);
	}
	render() {
		const reviews = [ 1, 2, 3 ].map((item, i) => {
			return <ReviewGroup reviews={[]} />;
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
									<Select>
										<option>Group by</option>
									</Select>
								</div>
								<div className="col-xs-6 col-md-6">
									<Select>
										<option value="" selected={true}>
											Order by
										</option>
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
