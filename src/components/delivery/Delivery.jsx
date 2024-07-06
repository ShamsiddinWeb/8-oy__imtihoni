import React from "react";
import { Link } from "react-router-dom";
import line from "../../assets/line.png";
import "./Delivery.scss";

const Delivery = () => {
  return (
    <div className="delivery">
      <div className="container">
        <div className="delivery__start">
          <Link>Главная</Link>
          <img src={line} alt="" />
          <p>Доставка и оплата</p>
        </div>
        <div className="delivery__wrapper">
          <h1>Доставка и оплата</h1>
          <div>
            <article>
              <h3>Доставка</h3>
              <p>
                Мы осуществляем доставку со склада по Москве и Московской
                области собственной курьерской службой. Транспортными компаниями
                нашу продукцию мы доставляем по всей территории РФ, а так же по
                всем странам СНГ. <span>Сроки доставки: 4—6 недель</span>
              </p>
            </article>
            <article>
              <h3>Курьерская доставка</h3>
              <p>
                БЕСПЛАТНО доставим в приделах МКАД любой заказ от
                <span> 5 000 ₽</span>.Заказы свыше <span>30 000 ₽</span> имеют
                бесплатную доставку, включительно 15 км от МКАД
              </p>
            </article>
            <article>
              <h3>Самовывоз</h3>
              <p>
                Любой заказ можно забрать самостоятельно по адресу: г.
                Москва, Дмитровское шоссе д.100с2
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
