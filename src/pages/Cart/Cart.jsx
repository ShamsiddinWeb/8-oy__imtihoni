import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import Carts from "../../components/carts/Carts";
import EmptyCart from "../../components/emptyCart/EmptyCart";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const cart = useSelector((state) => state.cart.value);
  return <>{cart.length ? <Carts /> : <EmptyCart />}</>;
};

export default Cart;
