import React from "react";
import corzina from "../svg/basket.svg";
import "./Cart.css";

function Cart() {
  return (
    <section className="container">
      <div className="headerOfCart">
        <div className="leadCart">
          <div className="basket">
            <img className="corzina" src={corzina} alt="" />
            <span>Корзина</span>
          </div>
          <div className="total">
            <p>Всего: 142$</p>
          </div>
        </div>
        <div className="eventOfCarts">
            <div className="productCards">
                <div className="card">
                    <div className="productImg">
                        <img src="" alt="img" />
                    </div>
                    <div className="informationOfProduct">

                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
