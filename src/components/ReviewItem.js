import React from 'react';
import {ReviewItemWrapper, ReviewCard} from '../app.styles';

const ReviewItem = (props) => {
    return (
        <ReviewItemWrapper>
            <p className="month">DECEMBER</p>
            <ReviewCard>
                <div className="card-header row middle-xs">
                    <div className="item">
                        <div className="avatar"></div>
                    </div>
                    <div className="col-md-3 col-lg-2 col-sm-2 col-xs-4 item">
                        <span>DATE</span>
                        <p>12.12.2017</p>
                    </div>
                    <div className="col-md-4 col-lg-2 col-sm-3 col-xs-5 item">
                        <span>STARS</span>
                        <p>
                            {
                                [1,2,3,4,5].map((item, i) => {
                                    return (<i className="mdi mdi-star" />);
                                })
                            }
                        </p>
                    </div>
                    <div className="col-md-1 col-lg-6 col-sm-4 col-xs-12 item">
                        <span>PERSON</span>
                        <p>Anker SoundCore</p>
                    </div>
                </div>
                <h5>Review Title</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </ReviewCard>
        </ReviewItemWrapper>
    )
}

export default ReviewItem;