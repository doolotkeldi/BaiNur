import React, { useEffect, useState } from "react";
import corzina from "../svg/basket.svg";
import "./Cart.css";
import { pushData } from '../data';

function Cart() {
  const [cartInfo, setCartInfo] = useState("none");
  const [imgHandle,setImgHandle] = useState('')
  const [fixed,setFixset] = useState('none')
  console.log(imgHandle)
  const deleteProduct = (productId) => {
      const updatedCart = pushData.filter(item => item.id !== productId);
      pushData.splice(0, pushData.length, ...updatedCart);

  };

  const toggleHandler = ()=> {
    
  }

  return (
    <section  className="container cart-container">
      <div style={{display:fixed}}  className="fixed-content">
        <img src={imgHandle} alt="" />
        <button onClick={()=>setFixset('none')}>button</button>
      </div>
      {pushData.map((item) => (
        <div key={item.id} className="headerOfCart">
          <div className="leadCart">
            <div className="basket">
              <span>{item.name}</span>
            </div>
            <div className="total">
              <p>Всего: 142$</p>
            </div>
          </div>
          <div className="eventOfCarts">
            <div className="productCards">
              <div
                onMouseEnter={() => setCartInfo("block")}
                onMouseLeave={() => setCartInfo("none")}
                className="card"
              >
                <div className="cart-position" style={{ display: cartInfo }}>
                  <div className="cart-button">

                  <button className="" onClick={()=>{
                    setImgHandle(item.images)
                    setFixset('block')
                  }}>button</button>
                  </div>
                </div>
                <div className="productImg">
                  <img className="corzina" src={item.images} alt="" />
                  <button
                    style={{ padding: "10px 25px" }}
                    onClick={() => deleteProduct(item.id)}
                  >
                    Delete
                  </button>
                </div>
                <div className="informationOfProduct"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Cart;
