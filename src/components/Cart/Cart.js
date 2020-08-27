import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    const cart = props.cart;

    const total = cart.reduce( (total, prd) => total + prd.price, 0 );

    
    const tax = total / 10;
 
    return (
      <div className="cart-text">
        <h4>Your Order Summary</h4>
        <hr></hr>
        <p>Items Ordered: {cart.length}</p>
        <p>Tax + VAT: {tax}</p>
        <p>Total Price: {total + tax}</p>
      </div>
    );
};

export default Cart;