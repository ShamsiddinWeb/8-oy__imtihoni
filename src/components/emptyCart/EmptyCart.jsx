import React from "react";
import cartImg from "../../assets/cartemp.jpg";
import "./EmptyCart.scss"
const EmptyCart = () => {
  return (
    <div className="cart__empty">
      <img src={cartImg} alt="" />
    </div>
  );
};

export default EmptyCart;
