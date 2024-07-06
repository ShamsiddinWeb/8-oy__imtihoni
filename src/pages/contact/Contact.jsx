import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import line from "../../assets/line.png";
import "./Contact.scss";
import Kontact from "../../components/kontect/Kontact";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="contact__wrapper">
        <div className="container">
          <div className="contact__section">
            <article>
              <div className="line">
                <Link to={"/"}>Главная</Link>
                <img src={line} alt="" />
                <p>Контакты</p>
              </div>
              <h1>Контакты</h1>
            </article>
            <article className="adress">
              <h3>8 (800) 890-46-56</h3>
              <p>Пн-Пт: 10:00 до 19:00</p>
              <p>Сб-Вс: заказ через корзину</p>
              <p>Телефоны:</p>
            </article>
          </div>
        </div>
      </div>
      <Kontact/>
    </>
  );
};

export default Contact;
