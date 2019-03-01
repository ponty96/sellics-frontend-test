import styled from 'styled-components';
import color from './colors';

export const Button = styled.button`
	border-radius: 30px;
	border: none;
	background: ${color.blue};
	color: ${color.white};
	font-weight: 600;
	font-size: .7em;
	padding: 10px 45px;
	:hover {
		background: ${color.ashBlue};
	}
`;

export const AppWrapper = styled.div`padding: 30px;`;

export const FilterPaneWrapper = styled.div`margin-bottom: 20px;`;

export const Input = styled.input`
	border: 1px solid ${color.blue};
	background: #fff;
	border-radius: 20px;
	padding-left: 10px;
	height: 35px;
	width: 100%;
	margin-bottom: 20px;

	-webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
	-moz-box-sizing: border-box; /* Firefox, other Gecko */
	box-sizing: border-box; /* Opera/IE 8+ */

	/* Positions background arrow image */
	background-image: url('./assets/magnify.svg');
	background-repeat: no-repeat;
	background-size: 15px;
	background-position: 95% center;

	::placeholder {
		color: ${color.blue};
		font-weight: 600;
	}
`;

export const Select = styled.select`
	border: 1px solid ${color.blue};
	background: #fff;
	border-radius: 20px !important;
	padding-left: 10px;
	height: 35px;
	width: 100%;
	color: ${color.blue};
	font-weight: 600;
	margin-bottom: 20px;

	/* Removes the default <select> styling */
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;

	/* Positions background arrow image */
	background-image: url('./assets/menu-down.svg');
	background-repeat: no-repeat;
	background-position: 95% center;
`;

export const RatingsFilter = styled.div`
	span {
		font-size: .7em;
		font-weight: 600;
	}
`;

export const CheckboxWrapper = styled.div`
	margin-top: 10px;
	input {
		margin: 0;
	}
	span {
		font-size: .8em;
		color: ${color.grey};
		margin: 0;
		margin-right: 5px;
	}
`;

export const ReviewsWrapper = styled.div``;

export const ReviewCard = styled.div`
	border: 2px solid #f2f2f2;
	border-radius: 10px;
	padding: 30px;
	margin: 10px 0;
	.card-header {
		margin: 0;
		.item {
			.avatar {
				background: ${color.grey};
				height: 50px;
				width: 50px;
				margin-right: 20px;
			}
			span {
				font-size: .6em;
				font-weight: 600;
			}
			p {
				font-weight: 700;
				font-size: .8em;
			}
		}
	}
	h5 {
		margin: 0;
		margin-top: 20px;
		line-height: 2.6em;
	}
	p {
		margin: 0;
		line-height: 1.6em;
		font-size: .8em;
		text-align: justify;
	}
`;

export const ReviewItemWrapper = styled.div`
	margin-top: 30px;
	p.month {
		font-size: .75em;
		font-weight: 600;
	}
`;
