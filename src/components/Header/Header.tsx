import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import corzina from "../svg/basket.svg";
import heart from "../svg/favorites1.svg";
import Man from "../svg/user.svg";
import Search from "../svg/Vector.svg";
import BaiNur from "../svg/BAINUR.svg";
import Cart from "./Cart";
import { pushData } from "../data";
import "./Header.css";

function Header() {
  const [data,setData] = useState(pushData)

  return (
    <>
      <header>
        <div className="container">
          <div>
            <img src={BaiNur} alt="" />
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/home">Главная</Link>
              </li>
              <li>
                <Link to="/about">О нас</Link>
              </li>
          
              <li>
                <Link to="/formen">Для Мужчин</Link>
              </li>
              <li>
                <Link to="/women">Для Женщин</Link>
              </li>
              <li>
                <Link to="/children">Для Детей</Link>
              </li>
            </ul>
            <div className="image-info-header">
              <Link to="/Registration">
                <img className="man" src={Man} alt="" />
              </Link>
              <select className="select" name="" id="">
                <option className="option" value="">
                  Ru
                </option>
              </select>
              <Link className="cart" to="/cart">
                <span className="">{data.length}</span>
                <img className="corzina" src={corzina} alt="" />
              </Link>
              <img className="search" src={Search} alt="" />
              <img className="heart" src={heart} alt="" />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
