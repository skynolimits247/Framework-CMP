import React, { Component } from 'react';
import './cart.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCarts, addCartCount, reduceCartCount } from '../shared/actions/movieActions';

let subTotal=0;
let taxable =0;
let grandTotal =0;
function total(cart){
    subTotal = 0;
    taxable = 0;
    grandTotal = 0;
    for(let i=0; i<cart.length; i++){  
        subTotal += cart[i].UnitPrice * cart[i].Quantity;
    } 
    taxable = subTotal/10;
    grandTotal = subTotal+taxable;
}
class Cart extends Component {
    constructor(props) {
        super(props);  
        this.addCartCount = this.addCartCount.bind(this);
        this.reduceCartCount = this.reduceCartCount.bind(this);
    }
    componentWillMount() {
        this.props.fetchCarts();
    }
    addCartCount(id) {  
        this.props.addCartCount(id);
    }
    reduceCartCount(id){
        this.props.reduceCartCount(id);
    }
    render() {
    const CartItems = this.props.cart.map(movie => (
        <tr key={movie.ProductId}>
            <td><strong>{movie.Title}</strong></td>
            <td> 
                <button className="button1" 
                onClick={() => 
                this.addCartCount(movie.ProductId)}>
                +
                </button>
                &nbsp; &nbsp;
                {movie.Quantity}
                &nbsp; &nbsp;
                <button className="button1"
                    onClick={() =>
                        this.reduceCartCount(movie.ProductId)}>
                    -
                </button>
            </td>
            <td>$ {movie.UnitPrice}</td>
            <td>$ {(movie.UnitPrice * movie.Quantity).toFixed(2)}</td>
        </tr>
    ));
        total(this.props.cart)
        return (
            <div>
                <div className="container">
                    <table>
                        <tbody>
                        <tr>
                            <th>| Item(s)    |</th>
                            <th>| Quantity   |</th>
                            <th>| Unit Price |</th>
                            <th>| Total Prices     |</th>
                        </tr>
                       {CartItems}
        <tr>    
            <td colSpan="2"></td>
            <td>
                 <strong>
                     SubTotal : 
                 </strong>
            </td>
                <td>
                  <strong>
                       $ {subTotal.toFixed(2)} 
                  </strong>
                </td>
        </tr>
        <tr>    
            <td colSpan="2"></td>
            <td>
                <strong>
                    Tax Applicable :
                </strong>
            </td>
            <td>
                <strong>
                    $ {taxable.toFixed(2)}
                </strong>
            </td>
        </tr>
        <tr>    
            <td colSpan="2"></td>
            <td>
                <strong>
                    Total Billable Amount : 
                </strong>
            </td>
            <td>
                <strong>
                    $ {grandTotal.toFixed(2)}
                </strong>
            </td>
        </tr>
        <tr>
            <td colSpan="2">
                <button className="cart-button">
                    checkout!<span className="glyphicon glyphicon-shopping-cart"></span>    
                </button>
            </td>
            <td colSpan="2">
                <button className="cart-button">
                     Go Back
                </button>
            </td>
        </tr>
        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
    Cart.propTypes = {
    addCartCount: PropTypes.func.isRequired,
    reduceCartCount: PropTypes.func.isRequired,
    fetchCarts: PropTypes.func.isRequired,
    cart: PropTypes.array.isRequired
    };

    const mapStateToProps = state => {
        return { cart: state.cart.cart };
    };
    const mapDispatchToProps = {
        fetchCarts,
        addCartCount,
        reduceCartCount
    };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);