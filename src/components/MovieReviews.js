// Code MovieReviews Here
import React from 'react'

const displayReview = ({headline}) => {
    return <p className="review">{headline}</p>
}

const MovieReviews = props => {
    return (<div className="review-list">
        {props.reviews.map(displayReview)}
    </div>)
}

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews

