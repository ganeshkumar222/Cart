import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../utils/CartComponentContext";
import { Button, ButtonGroup, Card, Col, Dropdown, Row } from "react-bootstrap";
import { CartCard } from "./CartCard";
export const Cart = () => {
  let { data, setData ,quantity,setQuantity,amount,setAmount} = useContext(CartContext);
   
  useEffect(()=>{
      let price = 0;
      let quantity = 0
      for(let i =0 ;i<data[0].products.length;i++){
        price+=(data[0].products[i].price)*(data[0].products[i].quantity)
        quantity+=data[0].products[i].quantity
      }
      setAmount(price)
      setQuantity(quantity)

  },[data])

  return (
    <div className="container-fluid">
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Guvi's kart</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Qunantity : {quantity}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Total : {amount}</a>
        </li>
      </ul>
      <span className="navbar-text">
        Change the quantity to see the price changes
      </span>
    </div>
  </div>
</nav>
      <div className="container">
      {data[0].products.map((e) => {
        // console.log(e.image) 
        
        return <CartCard key={e.id} e={e} data={data} setData={setData}></CartCard>
      
      })}
      </div>
      
    </div>
  );
};
