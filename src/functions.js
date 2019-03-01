/**
 *  Reviews can be grouped by day, week, or month. Make sure you show the time interval for which reviews are shown (i.e. “05.02”, “05.02 - 11.02” or “January”)
 */

/**
  * Reviews can be filtered by number of stars. The default state should show 5 star reviews only.
  */

/**
  * Reviews should be sortable by time. Users should be able to toggle between showing most
recent reviews first, or last.
  */

export const sort = (reviews, sortType) => {
	if (sortType == 'mrf') {
		return sortMostRecentFirst(reviews);
	} else {
		return sortMostRecentLast(reviews);
	}
};

export const sortMostRecentFirst = (reviews) => {
	return reviews.sort((a, b) => {
		a = new Date(a.reviewCreated);
		b = new Date(b.reviewCreated);
		return a > b ? -1 : a < b ? 1 : 0;
	});
};

export const sortMostRecentLast = (reviews) => {
	return reviews.sort((a, b) => {
		a = new Date(a.reviewCreated);
		b = new Date(b.reviewCreated);
		return b > a ? -1 : b < a ? 1 : 0;
	});
};