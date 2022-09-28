import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart'>
            <h2>Order Summury</h2>
            <div>
                <p>Selected Items: </p>
                <p>Total Price: </p>
                <p>Total Shipping Charge: </p>
                <p>Tax: </p>
                <h4>Grand Total: </h4>
            </div>
        </div>
    );
};

export default Cart;