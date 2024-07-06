import React from "react";
import img1 from "../../assets/brimg1.png";
import img2 from "../../assets/brimg2.png";
import img3 from "../../assets/brimg3.png";
import img4 from "../../assets/brimg4.png";
import left from "../../assets/left.png";
import right from "../../assets/right3.png";
import "./Brands.scss";

const Brands = () => {
  return (
    <div className="brands">
      <div className="container">
        <div className="brands__card">
          <h3>Только проверенные бренды</h3>
          <div>
            <button>
              <img src={left} alt="" />
            </button>
            <button>
              <img src={right} alt="" />
            </button>
          </div>
        </div>
        <div className="brands__wrapper">
          <span>
            <img src={img1} alt="" />
          </span>
          <span>
            <img src={img2} alt="" />
          </span>
          <span>
            <img src={img3} alt="" />
          </span>
          <span>
            <img src={img4} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Brands;
