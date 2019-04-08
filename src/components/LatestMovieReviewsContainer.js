import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'IhVI7NngfUwItidvhMrxDCxZ11xLD80X';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
    state = {
        reviews: []
    }

    componentDidMount() {
        return fetch(URL)
            .then(resp => resp.json())
            .then(reviews => this.setState({reviews: reviews.results}))
    }

    render() {
        return(
            <div className="latest-movie-reviews">
                <h1>The latest Reviews:</h1>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default LatestMovieReviewsContainer
