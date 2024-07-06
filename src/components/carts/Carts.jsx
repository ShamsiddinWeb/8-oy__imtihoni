import React from "react";
import line from "../../assets/line.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBinLine } from "react-icons/ri";
import {
  addToCart,
  removeFromCart,
  decrementCart,
  deleteAllCart,
} from "../../context/slices/cartSlice";
import "./Carts.scss";
import FormCart from "../formCart/FormCart";

const CartComponent = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  let items = cart?.map((el) => (
    <div key={el.id} className="cartComponent__item">
      <div className="items__img">
        <span>
          <img src={el.url} alt="" />
        </span>
      </div>
      <div className="items__info">
        <div>
          <p>Встраиваемый светильник Novotech</p>
          <h4>${el.price}</h4>
        </div>
        <p>{el?.text}</p>
        <p className="title">{el?.title}</p>
        <article>
          <button
            disabled={el.quantity <= 1}
            onClick={() => dispatch(decrementCart(el))}
          >
            -
          </button>
          <span>{el.quantity}</span>
          <button onClick={() => dispatch(addToCart(el))}>+</button>
        </article>
        <button
          onClick={() => dispatch(removeFromCart(el))}
          className="btn__del"
        >
          <RiDeleteBinLine />
        </button>
      </div>
    </div>
  ));

  return (
    <>
      <div className="carts">
        <div className="container">
          <div className="carts__start">
            <Link to={"/"}>Главная</Link>
            <img src={line} alt="" />
            <Link to={"/catalog"}>Каталог</Link>
            <img src={line} alt="" />
            <p>Корзина</p>
          </div>
          <div className="carts__card">
            <h1>Корзина</h1>
          </div>
          <div className="carts__wrapper">
            <div className="item__title">
              <p>Фото</p>
              <p>Товары</p>
              <p>Описание</p>
              <p>Артикул</p>
              <p>Количество</p>
              <p></p>
            </div>
            <div className="carts__wrapper-card">{items}</div>
          </div>
        </div>
      </div>
      <div className="container">
      <FormCart
        cart={cart}
        total={calculateTotal()}
        clearCart={() => dispatch(deleteAllCart())}
      />
      </div>
    </>
  );
};

export default CartComponent;
