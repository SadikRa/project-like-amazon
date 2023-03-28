import React, { useEffect, useState } from "react";
import Productes from "./product/Productes";
import "./Shop.css";
const Shop = () => {
    const [Products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
         .then(res => res.json())
         .then(data => setProducts(data))
 
     },[])

    const handleAddToCard = (product) =>{
      const newCart = [...cart, product];
      setCart(newCart);
    }
  return (
    <div className="shop-container">
      <div className="product-container"> 
     {
       Products.map((product) => <Productes product={product} handleAddToCard={handleAddToCard}> </Productes>)
     }
      </div>
      <div className="card-container">
        <h1>Order summary</h1>
        <p>Selected Items: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
