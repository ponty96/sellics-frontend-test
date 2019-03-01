import _ from 'lodash';
import moment from 'moment';
import * as DATA from './dummy-data';

/**
 *  Reviews can be grouped by day, week, or month. Make sure you show the time interval for which reviews are shown (i.e. “05.02”, “05.02 - 11.02” or “January”)
 *
 *
 */

export const groupReviews = (reviews, type) => {
	const groups = _.groupBy(reviews, (review) => getReviewTimeAtrr(review.reviewCreated, type));
	return Object.keys(groups).map((key) => ({
		key: getKey(groups[key], key, type),
		reviews: groups[key],
		type: type
	}));
};

const getKey = (reviewsInGroup, key, type) => {
	if (type == 'week') {
		let sortedReviews = sortMostRecentLast(reviewsInGroup);
		let firstReviewDate = sortedReviews[0].reviewCreated;
		let lastReviewDate = sortedReviews[sortedReviews.length - 1].reviewCreated;
		return `${formatDate(firstReviewDate)} - ${formatDate(lastReviewDate)}`;
	}
	return key;
};

const formatDate = (date) => {
	return `${pad2(moment(date).day())}.${pad2(moment(date).month())}`;
};

function pad2(number) {
	return (number < 10 ? '0' : '') + number;
}

export const getReviewTimeAtrr = (reviewCreated, type = '') => {
	switch (type) {
		case 'week':
			return moment(reviewCreated).isoWeek();
		case 'day':
			return moment(reviewCreated).format('dddd');
		case 'month':
			return moment(reviewCreated).format('MMMM');
		case 'year':
			return moment(reviewCreated).format('YYYY');
		default:
			return moment(reviewCreated).format('YYYY');
	}
};

/**
  * Reviews can be filtered by number of stars. The default state should show 5 star reviews only.
  */

export const filterReviews = (reviews, stars) => {
	return reviews.filter((review) => review.stars == parseInt(stars));
};

/**
  * Reviews should be sortable by time. Users should be able to toggle between showing most
recent reviews first, or last.
  */

export const sort = (reviews, sortType, key = 'reviewCreated') => {
	if (sortType == 'mrf') {
		return sortMostRecentFirst(reviews, key);
	} else if (sortType == 'mrl') {
		return sortMostRecentLast(reviews, key);
	}
	return reviews;
};

export const sortMostRecentFirst = (reviews, key = 'reviewCreated') => {
	return reviews.sort((a, b) => {
		a = new Date(a[key]);
		b = new Date(b[key]);
		return a > b ? -1 : a < b ? 1 : 0;
	});
};

export const sortMostRecentLast = (reviews, key = 'reviewCreated') => {
	return reviews.sort((a, b) => {
		a = new Date(a[key]);
		b = new Date(b[key]);
		return b > a ? -1 : b < a ? 1 : 0;
	});
};

/**
 * Infinite scrolling. As you scroll, more reviews will be loaded.
 */

export const getReviews = async (page) => {
	// return await fetch(`https://sellics-frontend-test.herokuapp.com/reviews/${page}`)
	// 	.then((response) => response)
	// 	.then((data) => data);
	return new Promise(function(resolve, reject) {
		setTimeout(() => resolve(DATA[`PAGE_${page}_DATA`]), 2000);
	});
};
