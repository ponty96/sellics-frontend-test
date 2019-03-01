import { sort, sortMostRecentFirst, sortMostRecentLast, filterReviews } from '../functions';
import { PAGE_1_DATA } from '../dummy-data';

const REVIEWS = PAGE_1_DATA.reviews;

test('sorts reviews by date most recent first', () => {
	// list of all reviews reviewCreated field
	// use the default javascript function to sort them, which by default sorts asc
	// reverse sorted result to get what we want exactly
	const arrayOfReviewCreatedFields = REVIEWS.map((review) => review.reviewCreated);
	const arrayOfReviewCreatedFieldBackwards = arrayOfReviewCreatedFields.sort().map((time) => time).reverse();

	// sort reviews most recent first and return reviewCreatedField
	const sortedReviewsReviewCreatedField = sortMostRecentFirst(REVIEWS).map((review) => review.reviewCreated);
	expect(sortedReviewsReviewCreatedField).toEqual(arrayOfReviewCreatedFieldBackwards);
});

test('sorts reviews by date most recent last', () => {
	// list of all reviews reviewCreated field
	// use the default javascript function to sort them, which by default sorts asc
	const arrayOfReviewCreatedFields = REVIEWS.map((review) => review.reviewCreated);
	const arrayOfReviewCreatedFieldBackwards = arrayOfReviewCreatedFields.sort().map((time) => time);

	// sort reviews most recent first and return reviewCreatedField
	const sortedReviewsReviewCreatedField = sortMostRecentLast(REVIEWS).map((review) => review.reviewCreated);
	expect(sortedReviewsReviewCreatedField).toEqual(arrayOfReviewCreatedFieldBackwards);
});

test('sorts reviews by date based on sort type passed', () => {
	const sortItemsByMostRecentFirst = sort(REVIEWS, 'mrf');
	const sortItemsByMostRecentLast = sort(REVIEWS, 'mrl');

	expect(sortItemsByMostRecentFirst).toEqual(sortMostRecentFirst(REVIEWS));
	expect(sortItemsByMostRecentLast).toEqual(sortMostRecentLast(REVIEWS));
});

Array.prototype.random = function() {
	return this[Math.floor(Math.random() * this.length)];
};

test('filters reviews based on stars', () => {
	const fiveStarReviews = filterReviews(REVIEWS, '5');
	const threeStarReviews = filterReviews(REVIEWS, 3);
	const fourStarReviews = filterReviews(REVIEWS, 4);

	expect(fiveStarReviews).toHaveLength(13);
	expect(threeStarReviews).toHaveLength(6);
	expect(fourStarReviews).toHaveLength(1);

	expect(fiveStarReviews.random().stars).toEqual(5)
	expect(fourStarReviews.random().stars).toEqual(4)
});
