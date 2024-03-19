import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaTelegram,
  FaEnvelope,
} from "react-icons/fa";
import Logo from "../svg/BAINUR.svg";
import "./Footer.css";

function Footer() {
  return (
    <div className="container">
      <footer>
        <div className="threeInfo">
          <div className="delivery">
            <img src={Logo} alt="" />
            <p>
              Спортивная одежда НА ЗАКАЗ <br /> По городу Бишкек и всему <br />{" "}
              Кыргызстану. Только оригинальные <br /> товары.
            </p>
          </div>
          <div className="categoryFoot">
            <p>КАТЕГОРИЯ</p>
            <p>для Мужчин</p>
            <p>для Женщин</p>
            <p>для Детей</p>
          </div>
          <div className="mediaGroup" style={{ textAlign: "center" }}>
            <h2>МЫ В СОЦ.СЕТЯХ</h2>
            <FaInstagram
              size={32}
              style={{ color: "#bc2a8d", marginRight: "15" }}
            />
            <FaWhatsapp
              size={32}
              style={{ color: "#25d366", marginRight: "15" }}
            />
            <FaTelegram
              size={32}
              style={{ color: "#0088cc", marginRight: "15" }}
            />
            <FaEnvelope
              size={32}
              style={{ color: "#333", marginRight: "15" }}
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
