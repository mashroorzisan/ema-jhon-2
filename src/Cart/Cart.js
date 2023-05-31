import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h3>this is orders</h3>
            <p>selected products: {cart.length}</p>
        </div>
    );
};

export default Cart;