import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'A6V4qqilR1X3q2wPM1208bDAGEvOT1hI';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`
;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
constructor() {
  super()
  this.state = {
    reviews: [],
    searchTerm: ''
  }
}

handleSearchInputChange = (event) => {
  this.setState({
    searchTerm: event.target.value
  })
}

handleSubmit = (event) => {
  event.preventDefault()

  fetch(`${URL}&query=${this.state.searchTerm}`)
      .then(res => res.json())
      .then(res => this.setState({ reviews: res.results }));
}


render() {
  return(
    <div className='searchable-movie-reviews'>
    <h2> Search for a review: </h2>
    <form onSubmit={this.handleSubmit}>
    <input id='search-input' type='text' value={this.state.searchTerm} onChange={this.handleSearchInputChange}/>
    <button type='submit'>Search</button>
    </form>
    <h2> Results: </h2>
    <MovieReviews reviews={this.state.reviews} />

    </div>
  )
}

}
