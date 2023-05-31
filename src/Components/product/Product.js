import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = ({ product, handleAddToCart }) => {
    const { name, img, seller, price, ratings } = product;
    return (
        <div className='product-card'>
            <div className='card-head'>
                <img src={img} alt="product" />
                <p>{name}</p>
                <p>Price: ${price}</p>
            </div>
            <div className="card-body">
                <p> <small>Manufacturer : {seller}</small></p>
                <p><small>Rating : {ratings}</small></p>
            </div>
            <div className="footer">
                <button onClick={() => handleAddToCart(product)} className='card-btn'>Add to cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
            </div>

        </div >
    );
};

export default Product;