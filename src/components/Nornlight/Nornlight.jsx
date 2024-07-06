import React from "react";
import right from "../../assets/right2.png";
import "./Nornlight.scss";
import { NornLigtItems } from "../../data/NornlightData/NornLightData";

const Nornlight = () => {
  let card = NornLigtItems.map((el) => (
    <div key={el.id} className="nornlight__card">
      <div className="nornlight__card__img">
        <span>
          <img src={el.img} alt="" />
        </span>
      </div>
      <div className="nornlight__card__info">
        <h3>{el.title}</h3>
        <p>{el.desc}</p>
      </div>
    </div>
  ));

  return (
    <div className="nornlight">
      <div className="container">
        <div className="nornlight__title">
          <h1>Почему NORNLIGHT?</h1>
          <button className="btn">
            <p>О компании</p>
            <img src={right} alt="" />
          </button>
        </div>
        <div className="nornlight__section">{card}</div>
        <button className="btn show">
          <p>О компании</p>
          <img src={right} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Nornlight;
