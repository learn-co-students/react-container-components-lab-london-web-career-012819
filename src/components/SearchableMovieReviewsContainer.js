import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'IhVI7NngfUwItidvhMrxDCxZ11xLD80X';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=`


class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        serchQuery: ""
    }

    getReviews() {
        return fetch(URL + this.state.serchQuery)
            .then(resp => resp.json())
            .then(reviews => this.setState({reviews: reviews.results}))
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({serchQuery: event.target.query.value}, () => this.getReviews())
    }

    render() {
        return(
            <div className="searchable-movie-reviews">
                <h1>Serch through reviews</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Unicorn" name="query"></input>
                    <input type="submit" value="query"></input>
                </form>
                
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer