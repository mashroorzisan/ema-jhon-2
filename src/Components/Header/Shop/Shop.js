import React, { useEffect, useState } from 'react';
import Cart from '../../../Cart/Cart';
import Product from '../../product/Product';
import './Shop.css'


const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const url = 'https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json';
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }


    return (
        <div className='products'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="order-summery">
                <Cart
                    key={cart.id}
                    cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;