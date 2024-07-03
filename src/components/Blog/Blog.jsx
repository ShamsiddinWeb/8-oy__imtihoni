import React from "react";
import right from "../../assets/right2.png";
import img1 from "../../assets/blimg1.png";
import img2 from "../../assets/blimg2.png";
import img3 from "../../assets/blimg3.png";
import top from "../../assets/top.png";
import "./Blog.scss";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div id="nimadir" className="blog">
      <div className="container">
        <div className="blog__start">
          <h1>Блог</h1>
          <Link to={"/blog"} className="btn">
            <p>Перейти в блог</p>
            <img src={right} alt="" />
          </Link>
        </div>
        <div className="blog__wrapper">
          <div className="blog__wrapper-card">
            <div className="blog__wrapper-card__img">
              <img src={img1} alt="" />
            </div>
            <div className="blog__wrapper-card__info">
              <article>
                <h3>Как правильно освещать дом снаружи?</h3>
                <img src={top} alt="" />
              </article>
              <span>01.01.2024</span>
            </div>
          </div>
          <div className="blog__wrapper-card">
            <div className="blog__wrapper-card__img">
              <img src={img2} alt="" />
            </div>
            <div className="blog__wrapper-card__info">
              <article>
                <h3>Как правильно освещать дом снаружи?</h3>
                <img src={top} alt="" />
              </article>
              <span>01.01.2024</span>
            </div>
          </div>
          <div className="blog__wrapper-card">
            <div className="blog__wrapper-card__img">
              <img src={img3} alt="" />
            </div>
            <div className="blog__wrapper-card__info">
              <article>
                <h3>Как правильно освещать дом снаружи?</h3>
                <img src={top} alt="" />
              </article>
              <span>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className="btn__show">
          <button className="btn show">
            <p>Перейти в блог</p>
            <img src={right} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
