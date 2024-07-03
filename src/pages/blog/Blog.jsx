import React from "react";
import { Link } from "react-router-dom";
import line from "../../assets/line.png";
import "./blog.scss";
import Blog from "../../components/Blog/Blog";

const Blogs = () => {
  return (
    <>
      <div className="blog__wrapper">
        <div className="container">
          <div className="blog__line">
            <Link to="/">Главная</Link>
            <img src={line} alt="line" />
            <p>Блог</p>
          </div>
          <h1>Блог</h1>
        </div>
      </div>
      <Blog/>
    </>
  );
};

export default Blogs;
