import React from 'react';
import "./Card.css"
const Card = (props) => {
    const {cart} = props;

    let total = 0;
    let totalShpping = 0;
    let quantity = 0;
    for(const product of cart){
        if(product.quantity===0){
            quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalShpping = totalShpping + product.shipping;
        quantity = quantity + product.quantity;
    }
    let tax = total*7/100;
    let GrandTotal = total + tax +totalShpping;
    return (
        <div className='cart'>
             <h4>Order summary</h4>
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: ${total.toFixed(2)}</p>
        <p>Total Shipping Charge:${totalShpping}</p>
        <p>tax:${tax}</p>
        <h6>Grand total:${GrandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Card;