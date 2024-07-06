import React, { useState, useEffect } from "react";
import { BsCart } from "react-icons/bs";
import { FaCartArrowDown } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Skeleton from "../skeleton/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../context/slices/cartSlice";
import { toggleHeart } from "../../context/slices/wishlistSlice";
import { useGetCategoryQuery } from "../../context/api/categoryApi";
import Modal from "../modal/Modal";
import "./Product.scss";

const Product = ({ isMarriade, data, isLoading, justifyContent }) => {
  const wishlist = useSelector((state) => state?.wishlist?.value);
  const carts = useSelector((state) => state.cart.value);
  const [modulToggle, setModulToggle] = useState(null);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const { data: categories } = useGetCategoryQuery();
  const [categoryValue, setCategoryValue] = useState("all");
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    if (categoryValue === "all") {
      setFilteredData(data);
    } else {
      setFilteredData(data?.filter((i) => i.category === categoryValue));
    }
  }, [categoryValue, data]);

  let productItems = filteredData?.map((el) => (
    <div key={el.id} className="product__card">
      <img onClick={() => setModulToggle(el)} src={el.url} alt="productImg" />
      <div className="product__content">
        <Link to={`/products/${el.id}`}>
          <h3 className="product__content__text" title={el.title}>
            {el.title}
          </h3>
        </Link>
        <div className="product__content__items">
          <div>
            <s>${el.price * 2}</s>
            <p>${el.price}</p>
          </div>
          <button
            onClick={() => dispatch(addToCart(el))}
            className="product__content__items__item"
          >
            {carts?.some((item) => item.id === el.id) ? (
              <FaCartArrowDown className="nima" />
            ) : (
              <BsCart />
            )}
          </button>
        </div>
      </div>
      <button
        className="product__heart"
        onClick={() => dispatch(toggleHeart(el))}
      >
        {wishlist?.some((item) => item.id === el.id) ? (
          <FiHeart style={{ fill: "red", stroke: "red" }} />
        ) : (
          <FiHeart />
        )}
      </button>
    </div>
  ));

  let categoryItems = categories?.map((el) => (
    <li
      className={`category__item ${categoryValue === el.title ? "click" : ""}`}
      onClick={() => setCategoryValue(el.title)}
      key={el.id}
    >
      <span>{el.title}</span>
    </li>
  ));

  return (
    <div>
      <section className="product">
        <div className="container">
          <div className="product__start">
            <h1 className="home__titles__title">Популярные товары</h1>
            {isMarriade && (
              <button
               
                className="home__titles__btn display__none"
              >
                Все товары <IoIosArrowRoundForward />
              </button>
            )}
          </div>
          {isMarriade ? (
            <ul className="category__list">
              <li
                className={`category__item ${
                  categoryValue === "all" ? "click" : ""
                }`}
                onClick={() => setCategoryValue("all")}
                value={"all"}
              >
                <span>All</span>
              </li>
              {categoryItems}
            </ul>
          ) : (
            <></>
          )}
          <div style={{ justifyContent }} className="product__cards">
            {isLoading ? <Skeleton /> : productItems}
          </div>
          {isMarriade && (
            <button
              onClick={() => navigate("/all-products")}
              style={{ display: "none" }}
              className="home__titles__btn display__flex home__btn2 width__100"
            >
              Весь товары <IoIosArrowRoundForward />
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default Product;
