import React, { useEffect, useState } from 'react';
import './Shop.css'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products)
    return (
        <div className='shop'>
            <div className="products">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}></Product>)
                }
            </div>
            <div className="cart">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;