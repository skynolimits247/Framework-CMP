import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import AppRoutes from '../../app-routes';
import logo from '../assets/favicon.ico';
import './header.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCarts } from '../actions/movieActions';

var cartCounts = 0 ;
function cartCount(count = 0 ){  
 cartCounts =  count.length;
}

class Header extends Component {
componentWillMount() {
    this.props.fetchCarts();
    document.title = 'Stop-N-Shop';
  }
  componentDidUpdate(){ 
    this.props.fetchCarts();
  }
    render() {
        cartCount(this.props.cart);
        return (
            <div id = "navbar">
                <Router> 
                    <ul>
                        <li className="branding"><Link to="/"><img className="logo" src={logo} alt="LOGO"/></Link></li>
                        <li><Link to="/home"> <span>Home </span> </Link></li>
                        <li><Link to="/about"> <span>About </span> </Link></li>
                        <li><Link to="/contact"> <span>Contact </span> </Link></li>
                        <li className="cart-count"><Link to="/cart"> <span>Cart: {this.props.cart.length} item(s) </span> </Link></li>
                    </ul> 
                    <AppRoutes />
                </Router>
            </div>  
        )
    }
}

Header.propTypes = {
  fetchCarts: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps, { fetchCarts })(Header);