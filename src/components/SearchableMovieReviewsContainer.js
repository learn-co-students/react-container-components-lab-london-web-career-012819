import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'AssJeB3es2zr4vZEsPdI2d1zrGDpNkqY';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: null
    }

    componentDidMount(){
        fetch(URL)
        .then(resp => resp.json())
        .then(resp => {
            this.setState({
                reviews: resp.results
            })
        })
    }

    search = e => {
        e.preventDefault();
        fetch(URL+`&query=${this.state.searchTerm}`)
            .then(resp => resp.json())
            .then(resp => {
                this.setState({
                    reviews: resp.results
                })
            })
    }

    handleChange = e => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    render(){
        return (<div className="searchable-movie-reviews">
            <form onSubmit={this.search}>
                <input name="query" onChange={this.handleChange} value={this.state.searchTerm} />
                <input type="submit" />
            </form>
            <MovieReviews reviews={this.state.reviews} />
        </div>)
    }
}