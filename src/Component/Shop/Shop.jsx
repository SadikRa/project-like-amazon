import React, { useEffect, useState } from "react";
import Productes from "./product/Productes";
import "./Shop.css";
const Shop = () => {
    const [Products, setProducts] = useState([]);
    
    useEffect(()=>{
        fetch('products.json')
         .then(res => res.json())
         .then(data => setProducts(data))
 
     },[])

    
  return (
    <div className="shop-container">
      <div className="product-container"> 
     {
       Products.map((product) => <Productes product={product}></Productes>)
     }
      </div>
      <div className="card-container">
        <h1>Order summary</h1>
      </div>
    </div>
  );
};

export default Shop;
