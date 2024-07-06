import React from "react";
import right from "../../assets/right.png";
import right2 from "../../assets/right2.png";
import "./Catalogs.scss";
import { Link } from "react-router-dom";

const Catalogs = ({ catalogItems }) => {
  let card = catalogItems.map((el) => (
    <div key={el.id} className="catalog__wrapper-card">
      <div className="catalog__wrapper-card__group">
        <h3>{el.title}</h3>
        <button>
          <p>От 540₽</p>
          <img src={right2} alt="" />
        </button>
      </div>
      <div className="catalog__wrapper-card__img">
        <img src={el.img} alt="" />
      </div>
    </div>
  ));

  return (
    <div className="catalog">
      <div className="container">
        <div className="catalog__start">
          <h1>Каталог</h1>
          <Link to={"/catalog"}>
            <p>Весь каталог</p>
            <img src={right} alt="" />
          </Link>
        </div>
        <div className="catalog__wrapper">{card}</div>
      </div>
    </div>
  );
};

export default Catalogs;
