import React, { useEffect, useState } from "react";
import corzina from "../svg/basket.svg";
import "./Cart.css";
import {pushData} from '../data'

function Cart() {

//   const [cartCorzina,setCorzina]= useState([])
//   useEffect(()=>{
// dataCorzina()
//   },[])
//   const dataCorzina = async()=>{
//     try {
//       const res = await fetch(pushData)
//       const data = await res.json()
//       setCorzina(data)
//     } catch (error) {
//       console.log(error)
//     }
//   }
  const [cartInfo,setCartInfo] = useState("none")
  return (
  
    <section className="container cart-container">
      {
        pushData.map((item)=>(
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
                <div onMouseEnter={()=>setCartInfo("block")} onMouseLeave={()=>setCartInfo("none")} className="card">
                  <div className="cart-position"style={{display:cartInfo}}><button>button</button></div>
                    <div className="productImg">
                    <img className="corzina" src={item.images} alt="" />
                     </div>
                    <div className="informationOfProduct">

                    </div>
                </div>
            </div>
        </div>
      </div>
        ))
      }
      
    </section>
  );
}

export default Cart;
