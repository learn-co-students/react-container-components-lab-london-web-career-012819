import React, { Component } from 'react';

const Movie = ({ headline, byline, summary_short }) => (

  <div className="review">
    <h2>{ headline }</h2>
    <h4>{ byline }</h4>
    <p>{ summary_short }</p>
  </div>
)


const MovieReviews = ({reviews}) => (
  <div className='review-list' >
    {reviews.map(review => <Movie key={review.headline} headline={review.headline} byline={review.byline} summary_short={review.summary_short}/>)}
    <p>===========================</p>
  </div>
)

MovieReviews.defaultProps = {
  reviews: []
};
export default MovieReviews
