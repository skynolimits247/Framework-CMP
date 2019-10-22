import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovie, fetchCarts, 
  addCartCount, reduceCartCount,
  addCartItem }
   from '../shared/actions/movieActions';

import './movies.css';

function trimName(name){
    if(name.length > 20) {
      return name.slice(0,20)+'..';
    }
    else{  
      return name;
    }
  }
function InCartCheck(props) {
  const movie = props.movieItem;
  const cart = props.cartItem;
  const addCartCount = props.addCartCount;
  const reduceCartCount = props.reduceCartCount;
  const addCartItem = props.addCartItem;
  let flag = null;
  for (let cartElement = 0; cartElement < cart.length; cartElement++) {
    if (cart[cartElement].Title === movie.Title) {
      flag = cart[cartElement];
      break;
    } else {
      continue;
    }
  }
  if (flag === null) {
    return (
      <button onClick={() =>
        addCartItem(movie)}>
        Add to Cart
      </button>
    );
  } else {
    return (
        <div>
        <button className="button1"
          onClick={() =>
            addCartCount(flag.ProductId)}>
          +
       </button>
        <input type="text" name="Quantity" size="4" value={flag.Quantity} disabled/>
     <button className="button1"
          onClick={() =>
            reduceCartCount(flag.ProductId)}>
          -
    </button> 
        </div>
    );
  }
}


class Movie extends Component {
componentWillMount() {
    this.props.fetchMovie();
  }
    render() {
    const movies = this.props.movies.map(movie => (
            <div key = {movie.Title} className="card">
              <div className="container">
                  <div>
                      <h4><b>{trimName(movie.Title)}</b></h4>
                        <img src= {movie.Poster} alt={trimName(movie.Title)} />
                        <p>Release Year : {movie.Year}</p>
            <InCartCheck movieItem={movie} cartItem={this.props.cart}
             addCartCount={this.props.addCartCount} 
             reduceCartCount={this.props.reduceCartCount}
              addCartItem={this.props.addCartItem}/>
                  </div>
              </div>
            </div> 
     
    ));
        return (
        <div className="container">
            <div className="flex-container">
            {movies}
            </div>
        </div>
        )
    }
}
Movie.propTypes = {
  fetchMovie: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  addCartCount: PropTypes.func.isRequired,
  reduceCartCount: PropTypes.func.isRequired,
  fetchCarts: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
  addCartItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    movies: state.movies.movies,
    cart: state.cart.cart };
};
const mapDispatchToProps = {
  fetchCarts,
  fetchMovie,
  addCartCount,
  reduceCartCount,
  addCartItem
};
export default connect(mapStateToProps, mapDispatchToProps)(Movie);