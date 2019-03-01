/**
 *  Reviews can be grouped by day, week, or month. Make sure you show the time interval for which reviews are shown (i.e. “05.02”, “05.02 - 11.02” or “January”)
 */

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

/**
 * Infinite scrolling. As you scroll, more reviews will be loaded.
 */

export const getReviews = async (page) => {
	// return await fetch(`https://sellics-frontend-test.herokuapp.com/reviews/${page}`)
	// 	.then((response) => response)
	// 	.then((data) => data);
	return {
		reviews: [
			{
				country: 'US',
				reviewId: 'R1SQ32067PGIK5',
				childAsin: 'B01353CVBO',
				authorId: '',
				title: 'Nice rattle sound',
				content: 'Just as cute as it can be!!! Nice rattle sound!!!',
				stars: 5,
				verified: true,
				reviewCreated: 1517961600000,
				productImg: '61YqZpvCyaL',
				productTitle: 'Bearington Baby Lil\' Spout Plush Elephant Shaker Rattle, 5"',
				watched: false,
				created: 1518038627000
			},
			{
				country: 'US',
				reviewId: 'R3TGD8Y79S18UQ',
				childAsin: 'B01M3S7P22',
				authorId: '',
				title: 'Smaller than I thought.',
				content:
					'Smaller than I though it was going to be. Also- when I washed it, the fuzz got all over everything else in the washer/dryer.',
				stars: 3,
				verified: true,
				reviewCreated: 1517616000000,
				productImg: '51+gRXywflL',
				productTitle: 'Hudson Baby Sherpa Blanket with Satin Binding, Pink',
				watched: false,
				created: 1517954722000
			},
			{
				country: 'US',
				reviewId: 'RML4KUCLVHE0S',
				childAsin: 'B01M3S7P22',
				authorId: '',
				title: 'Four Stars',
				content: 'Thin but OK',
				stars: 4,
				verified: false,
				reviewCreated: 1517184000000,
				productImg: '51+gRXywflL',
				productTitle: 'Hudson Baby Sherpa Blanket with Satin Binding, Pink',
				watched: false,
				created: 1517430130000
			},
			{
				country: 'US',
				reviewId: 'R167JDRHY8RJTU',
				childAsin: 'B01353CVBO',
				authorId: '',
				title: 'Five Stars',
				content: 'Absolutely adorable',
				stars: 5,
				verified: true,
				reviewCreated: 1517011200000,
				productImg: '61YqZpvCyaL',
				productTitle: 'Bearington Baby Lil\' Spout Plush Elephant Shaker Rattle, 5"',
				watched: false,
				created: 1517430006000
			},
			{
				country: 'US',
				reviewId: 'R1V342AML5YST2',
				childAsin: 'B01353CVBO',
				authorId: '',
				title: 'Five Stars',
				content: 'Very pleased with product',
				stars: 5,
				verified: true,
				reviewCreated: 1516924800000,
				productImg: '61YqZpvCyaL',
				productTitle: 'Bearington Baby Lil\' Spout Plush Elephant Shaker Rattle, 5"',
				watched: false,
				created: 1517430006000
			},
			{
				country: 'US',
				reviewId: 'R3IXQN3RSCK3FL',
				childAsin: 'B01M3S7P22',
				authorId: '',
				title: 'Three Stars',
				content: "didn't really like the material",
				stars: 3,
				verified: true,
				reviewCreated: 1516924800000,
				productImg: '51+gRXywflL',
				productTitle: 'Hudson Baby Sherpa Blanket with Satin Binding, Pink',
				watched: false,
				changed: 1517693097000,
				created: 1517430130000
			},
			{
				country: 'US',
				reviewId: 'R3L9TJRR1FXFPX',
				childAsin: 'B01FOREDY2',
				authorId: '',
				title: 'When inflated, the ball is an odd egg-shape -- ...',
				content:
					'When inflated, the ball is an odd egg-shape -- not what I was expecting but it still does the trick!',
				stars: 3,
				verified: true,
				reviewCreated: 1516492800000,
				productImg: '71b79%2B9NN%2BL',
				productTitle: 'Mini Exercise Ball with Pump - 9 Inch Bender Ball for Stability, Barre, Pilates,',
				watched: false,
				created: 1517389316000
			},
			{
				country: 'US',
				reviewId: 'R317ZOWHPLTBOV',
				childAsin: 'B01353CVBO',
				authorId: '',
				title: 'Five Stars',
				content: 'So adorable!',
				stars: 5,
				verified: true,
				reviewCreated: 1516233600000,
				productImg: '61YqZpvCyaL',
				productTitle: 'Bearington Baby Lil\' Spout Plush Elephant Shaker Rattle, 5"',
				watched: false,
				created: 1517430006000
			},
			{
				country: 'US',
				reviewId: 'R1YZ4TBYNZYJ1Q',
				childAsin: 'B01M3S7P22',
				authorId: '',
				title: 'nice color',
				content: 'So soft, nice color',
				stars: 5,
				verified: true,
				reviewCreated: 1515715200000,
				productImg: '51+gRXywflL',
				productTitle: 'Hudson Baby Sherpa Blanket with Satin Binding, Pink',
				watched: false,
				created: 1517430130000
			},
			{
				country: 'US',
				reviewId: 'RGDDQWGJ67J33',
				childAsin: 'B01353CVBO',
				authorId: '',
				title: 'SO Cute!!!',
				content: 'I loved it... it is so cute and very good quality!!!',
				stars: 5,
				verified: true,
				reviewCreated: 1515628800000,
				productImg: '61YqZpvCyaL',
				productTitle: 'Bearington Baby Lil\' Spout Plush Elephant Shaker Rattle, 5"',
				watched: false,
				created: 1517430006000
			},
			{
				country: 'US',
				reviewId: 'R7DO70AUOKCKB',
				childAsin: 'B01353CVBO',
				authorId: '',
				title: 'Five Stars',
				content: 'Cute',
				stars: 5,
				verified: true,
				reviewCreated: 1515542400000,
				productImg: '61YqZpvCyaL',
				productTitle: 'Bearington Baby Lil\' Spout Plush Elephant Shaker Rattle, 5"',
				watched: false,
				created: 1517430006000
			},
			{
				country: 'US',
				reviewId: 'R2RRR92UGO1MI7',
				childAsin: 'B01353CVBO',
				authorId: '',
				title: 'Very cute! Baby shower gift!',
				content: 'Very cute! Baby shower gift!',
				stars: 5,
				verified: true,
				reviewCreated: 1515456000000,
				productImg: '61YqZpvCyaL',
				productTitle: 'Bearington Baby Lil\' Spout Plush Elephant Shaker Rattle, 5"',
				watched: false,
				created: 1517430006000
			},
			{
				country: 'US',
				reviewId: 'R22FRX31LJ0ODR',
				childAsin: 'B01353CVBO',
				authorId: '',
				title: 'Adorable',
				content: 'Adorable baby elephant and its little rattle, absolutely loved it!',
				stars: 5,
				verified: true,
				reviewCreated: 1514937600000,
				productImg: '61YqZpvCyaL',
				productTitle: 'Bearington Baby Lil\' Spout Plush Elephant Shaker Rattle, 5"',
				watched: false,
				created: 1517430006000
			},
			{
				country: 'US',
				reviewId: 'R39TI99M16TX31',
				childAsin: 'B01FOREDY2',
				authorId: '',
				title: 'Great value! I use it with my entire body ...',
				content: 'Great value! I use it with my entire body weight and it holds up well.',
				stars: 5,
				verified: true,
				reviewCreated: 1514505600000,
				productImg: '71b79%2B9NN%2BL',
				productTitle: 'Mini Exercise Ball with Pump - 9 Inch Bender Ball for Stability, Barre, Pilates,',
				watched: false,
				created: 1517389316000
			},
			{
				country: 'US',
				reviewId: 'RAGDDT3INBJ5S',
				childAsin: 'B01M3S7P22',
				authorId: '',
				title: 'Three Stars',
				content: 'Blanket is so soft and nice , but very very small .',
				stars: 3,
				verified: true,
				reviewCreated: 1514505600000,
				productImg: '51+gRXywflL',
				productTitle: 'Hudson Baby Sherpa Blanket with Satin Binding, Pink',
				watched: false,
				created: 1517430130000
			},
			{
				country: 'US',
				reviewId: 'R2LRV9JP9MBO0W',
				childAsin: 'B01M3S7P22',
				authorId: '',
				title: 'Very Soft',
				content: 'Very soft. Great blanket!',
				stars: 5,
				verified: true,
				reviewCreated: 1514332800000,
				productImg: '51+gRXywflL',
				productTitle: 'Hudson Baby Sherpa Blanket with Satin Binding, Pink',
				watched: false,
				created: 1517430130000
			},
			{
				country: 'US',
				reviewId: 'R2PX7TAG1ILFD4',
				childAsin: 'B01FOREDY2',
				authorId: '',
				title: 'Five Stars',
				content: 'Very easy to inflate. Nice size for exercising. Solid',
				stars: 5,
				verified: true,
				reviewCreated: 1513555200000,
				productImg: '71b79%2B9NN%2BL',
				productTitle: 'Mini Exercise Ball with Pump - 9 Inch Bender Ball for Stability, Barre, Pilates,',
				watched: false,
				created: 1517389316000
			},
			{
				country: 'US',
				reviewId: 'R2QFQTH28ZABGZ',
				childAsin: 'B01FOREDY2',
				authorId: '',
				title: 'Good Ball for Certain Exercises',
				content:
					'The ball is just a little bigger than I wanted but I couldn\'t find a 7" ball on the site. But it seems pretty nice. Made of good material and bounces very nicely.',
				stars: 3,
				verified: true,
				reviewCreated: 1513123200000,
				productImg: '71b79%2B9NN%2BL',
				productTitle: 'Mini Exercise Ball with Pump - 9 Inch Bender Ball for Stability, Barre, Pilates,',
				watched: false,
				created: 1517389316000
			},
			{
				country: 'US',
				reviewId: 'RJL4DAYPBL1MI',
				childAsin: 'B01FOREDY2',
				authorId: '',
				title: 'The product was delivered within 2 days and came with ...',
				content:
					'The product was delivered within 2 days and came with a pump a straw and extra plug and well packaged although i’ve Already lost the extra plug. Made of heavy plastic. Took no time for me to pump up and ready to go. Would buy again from ProBody.',
				stars: 5,
				verified: true,
				reviewCreated: 1512950400000,
				productImg: '71b79%2B9NN%2BL',
				productTitle: 'Mini Exercise Ball with Pump - 9 Inch Bender Ball for Stability, Barre, Pilates,',
				watched: false,
				created: 1517389316000
			},
			{
				country: 'US',
				reviewId: 'R4TJN78ZMMCOS',
				childAsin: 'B01FOREDY2',
				authorId: '',
				title: 'Would have been nice if it had a self closin hole',
				content:
					"Been busy and hadn't had a chance but did it now. A little difficult to blow it up and plug it by yourself. Would have been nice if it had a self closin hole. Appreciate the extra stoppers. They wsy it was packed, it appears that some indentations were made on the ball from the stoppers or pump nozzle.",
				stars: 3,
				verified: true,
				reviewCreated: 1512604800000,
				productImg: '71b79%2B9NN%2BL',
				productTitle: 'Mini Exercise Ball with Pump - 9 Inch Bender Ball for Stability, Barre, Pilates,',
				watched: false,
				created: 1517389316000
			}
		],
		hasMore: true
	};
};
