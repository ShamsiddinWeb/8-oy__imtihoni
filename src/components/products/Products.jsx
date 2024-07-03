import React from "react";
import right from "../../assets/right2.png";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { toggleHeart } from "../../context/slices/wishlistSlice";
import "./Products.scss";
import { Link } from "react-router-dom";

const Products = ({ data }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.value);

  const isProductInWishlist = (product) => {
    return wishlist.some((item) => item.id === product.id);
  };

  const handleToggleHeart = (product) => {
    dispatch(toggleHeart(product));
  };

  let card = data?.map((product) => (
    <div key={product.id} className="products__wrapper-card">
      <div className="products__wrapper-card__img">
        <img   alt={product.title} src={product.url}  width={200} height={300}/>
        <button onClick={() => handleToggleHeart(product)}>
          {isProductInWishlist(product) ? <FaHeart className="products__wrapper-card__svg" /> : <FaRegHeart className="products__wrapper-card__svg" />}
        </button>
      </div>
      <div className="products__wrapper-card__group">
        <Link  to={`/products/${product.id}`}>
          <h3>{product.title}</h3>
        </Link>
        <article>
          <div>
            <del>${product.price +120}</del>
            <h2>${product.price}</h2>
          </div>
          <button>
            <HiOutlineShoppingCart />
          </button>
        </article>
      </div>
    </div>
  ));

  return (
    <div className="products">
      <div className="container">
        <div className="products__start">
          <h1>Популярные товары</h1>
          <button className="btn">
            <p>Все товары</p>
            <img src={right} alt="" />
          </button>
        </div>
        <div className="products__wrapper">{card}</div>
      </div>
    </div>
  );
};

export default Products;
