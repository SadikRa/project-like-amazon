import React from 'react';
import './Productes.css';

const Productes = (props) => {
    console.log(props.product)
    
    return (
        <div className='card-itmes'>
            <img src={props.product.img} alt="" />
           <div>
           <h3>{props.product.name}</h3>
            <p>price:{props.product.price}</p>
            <p>seller:{props.product.seller}</p>
            <p>ratings:{props.product.ratings} star</p>
           </div>
           <button className='btn-card'>add to card</button>
        </div>
        
    );
};

export default Productes;