import React from "react";
import "./About.css";

function About() {
  return (
    <section>
      <div className="bg_image__wrapper">
        <div className="bg_image">
          <h1>О Нас</h1>
        </div>
        <div className="aboutTexts">
          <h1>BAINUR</h1>
          <p className="importantTexts">
            <strong>BAINUR</strong>
            
              - это интернет-магазин спортивной одежды и обуви. Мы продаем <br />
              только оригинальные вещи, обувь и аксессуары от ведущих спортивных <br />
              брендов - Nike, Adidas, Puma, Reebok, VANS и др. На данный момент <br />
              мы возим товары только на заказ. Мы доставляем вещи из Турции, <br />
              США, России. Мы выкупаем товары с официальных сайтов брендов и их <br />
              партнеров. Каждого поставщика мы тщательно проверяем. На дан ном <br />
              сайте товары собираются с онлайн магазинов в автоматизированном <br />
              режиме. Также мы выкупаем с локальных аутлетов и выставляем их на <br />    
              нашей страничке в Instagram
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
