import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import line from "../../assets/line.png";
import "./blog.scss";
import Blog from "../../components/Blog/Blog";

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="blog__wrapper">
        <div className="container">
        </div>
      </div>
      <Blog/>
    </>
  );
};

export default Blogs;
