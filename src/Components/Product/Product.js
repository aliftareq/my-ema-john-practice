import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, price, ratings, seller } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div>
                <h5>Name : {name}</h5>
                <p>Price : <strong>{price}</strong></p>
            </div>
            <div>
                <p>Manufacturer : {seller}</p>
                <p>Ratings : {ratings}</p>
            </div>
            <button>Add To Cart</button>
        </div>
    );
};

export default Product;