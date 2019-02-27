import React, { Component } from 'react';
import { AppWrapper, Button, FilterPaneWrapper, ReviewsWrapper, RatingsFilter, Input, Select, CheckboxWrapper } from './app.styles';
import ReviewItem from './components/ReviewItem';

class App extends Component {
  render() {
    const reviews = [1, 2, 3].map((item, i) => {
      return (
        <ReviewItem />
      );
    })
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
                    <option>Order by</option>
                  </Select>
                </div>
              </div>
              <RatingsFilter className="row">
                <div className="col-xs-12 col-md-12">
                  <span className="">FILTER BY</span>
                  <CheckboxWrapper>
                    <input type="checkbox" /> <span>1<i className="mdi mdi-star" /></span> 
                    <input type="checkbox" /> <span>2<i className="mdi mdi-star" /></span> 
                    <input type="checkbox" /> <span>3<i className="mdi mdi-star" /></span> 
                    <input type="checkbox" /> <span>4<i className="mdi mdi-star" /></span> 
                    <input type="checkbox" /> <span>5<i className="mdi mdi-star" /></span> 
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
