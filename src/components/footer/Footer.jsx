import React from "react";
import visa from "../../assets/visa.png";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__start">
          <div className="footer__start-logo">
            <div className="footer__start-logo__img">
              <h2>NORNLIGHT</h2>
            </div>
            <p>8 (800) 890-46-56</p>
            <img src={visa} alt="" />
            <span>Политика конфидециальности</span>
            <span>Пользовательское соглашение</span>
            <div className="footer__start-logo__vk">
              <span>VK</span>
              <span>VK</span>
              <span>VK</span>
            </div>
          </div>
          <div className="footer__start-buyers">
            <h4>Покупателям</h4>
            <p>О компании</p>
            <p>Доставка и оплата</p>
            <p>Возврат</p>
            <p>Гарантии</p>
            <p>Контакты</p>
            <p>Блог</p>
          </div>
          <div className="footer__start-product">
            <h4>Товары</h4>
            <p>Люстры</p>
            <p>Светильники</p>
            <p>Бра</p>
            <p>Торшеры</p>
            <p>Комплектуюшие</p>
            <p>Настольные лампы</p>
            <p></p>
          </div>
          <div className="footer__start-spot">
            <h4></h4>
            <p>Споты</p>
            <p>Трековые светильники</p>
            <p>Уличные светильники</p>
            <p>Технические светильники</p>
            <p>Светодиодные ленты</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
