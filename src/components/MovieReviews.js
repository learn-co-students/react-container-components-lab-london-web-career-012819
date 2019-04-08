// Code MovieReviews Here

import React from 'react'

const Review = (props) => {
    return (
        <div className="review">
            <h3>{props.review.display_title}</h3>
            <p>{props.review.summary_short}</p>
        </div>
    )
}

const MovieReviews = (props) => {
    return(
        <div className="review-list">
            {props.reviews.map( (review, index) => <Review key={index} review={review}/>)}
        </div>
    )
}

export default MovieReviews
