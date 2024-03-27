import React, { useEffect, useState } from "react";
import "./Odejda.css";
import heart from "../svg/favorites1.svg";
import a from "../svg/a.svg";
import b from "../svg/b.svg";
import { Transition } from "react-transition-group";
import axios from "axios";
import { pushData } from '../data';

function Odejda() {
  const [btnImg, setBtnImg] = useState(a);
  const [filterImage, setFilterImage] = useState(false);
  const [API, setAPI] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://65c9eb603b05d29307df430a.mockapi.io/api/shop/Clothes"
        );
        setAPI(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const positionclick = () => {
    setBtnImg(btnImg === a ? b : a);
    setFilterImage(!filterImage);
  };

  const pushHandler = (item) => {
    const isProductInCart = pushData.some((product) => product.id === item.id);
    if (!isProductInCart) {
      pushData.push(item);
    } else {
      alert("Ваш продукт уже в корзине");
    }
  };

  const filterProductsByCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section>
      <div className="container odejda-content">
        <button onClick={positionclick}>
          Фильт <img className="button-image" src={btnImg} alt="" />
        </button>

        <Transition in={filterImage} timeout={1000} mountOnEnter unmountOnExit>
          {(state) => (
            <div className={`filter-position ${state}`}>
              <div className="filter-header">
                <div className="filter-position-content">
                  <h1 onClick={() => filterProductsByCategory("Мужские")}>Мужские</h1>
                  <div>
                    <p>Футболки</p>
                    <p>Худи</p>
                    <p>Брюки</p>
                    <p>Рубашка</p>
                    <p>Бутсы</p>
                    <p>Кеды</p>
                    <p>Шорты</p>
                  </div>
                </div>
                <div className="filter-position-content">
                  <h1 onClick={() => filterProductsByCategory("Женские")}>Женские</h1>
                  <div>
                    <p>Футболки</p>
                    <p>Худи</p>
                    <p>Кеды</p>
                    <p>Рубашка</p>
                    <p>Брюки</p>
                    <p>Юбки</p>
                    <p>Свитшоты</p>
                  </div>
                </div>
                <div className="filter-position-content">
                  <h1 onClick={() => filterProductsByCategory("Дети")}>Дети</h1>
                  <div>
                    <p>Футболки</p>
                    <p>Худи</p>
                    <p>Кеды</p>
                    <p>Рубашка</p>
                    <p>Юбки</p>
                    <p>Свитшоты</p>
                    <p>Брюки</p>
                    <p>Шорты</p>
                    <p>Бутсы</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Transition>

        <div className="text-info-filter">
          <span style={{ display: "flex" }}>
            <h1 style={{ color: "#0D99FF" }}>Главная // </h1>
            <h1>Все товары </h1>
          </span>
          <span style={{ display: "flex" }}>
            <h1>Главная // </h1>
            <h1 style={{ color: "#0D99FF" }}>Все товары </h1>
          </span>
        </div>

        <div className="image-container container">
          {API.slice(0, 4)
            .filter((item) => !selectedCategory || item.category === selectedCategory)
            .map((item) => (
              <div key={item.id} className="image-block">
                <div className="image-heart">
                  <img className="heart" src={heart} alt="" />
                </div>
                <div className="image-info">
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={item.images}
                    alt=""
                  />
                </div>
                <div className="text-info">
                  <h1>{item.name}</h1>
                  <p style={{ width: "75%" }}>{item.description}</p>
                  <h5>{item.price}$</h5>
                  <button onClick={() => pushHandler(item)}>Добавить в корзину</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Odejda;
