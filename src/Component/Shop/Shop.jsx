import React, { useEffect, useState } from "react";
import Productes from "./product/Productes";
import Card from "../Card/Card";
import "./Shop.css";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
const Shop = () => {
    const [Products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
         .then(res => res.json())
         .then(data => setProducts(data))
 
     },[])

     useEffect(()=>{
      const sortedCart = getShoppingCart();
      const saveCart  = []
     for(const id in sortedCart){

      const saveProduct = Products.find(product => product.id == id);
      if(saveProduct){
        const quantity = sortedCart[id];
        saveProduct.quantity = quantity;
        saveCart.push(saveProduct);
      }
     

      console.log(saveProduct)
     }
     setCart(saveCart)
    },[Products])
    
    const handleAddToCard = (product) =>{
      const newCart = [...cart, product];
      setCart(newCart);
      addToDb(product.id);
    }
  return (
    <div className="shop-container">
      <div className="product-container"> 
     {
       Products.map((product) => <Productes product={product} handleAddToCard={handleAddToCard}> </Productes>)
     }
      </div>
      <div className="card-container">
       <Card cart={cart}></Card>
      </div>
    </div>
  );
};

export default Shop;
