import React from "react";
import { useSelector } from "react-redux";
import Products from "../../components/products/Products";
import Empty from "../../components/empty/Empty";

const Favorites = () => {
  const favorites = useSelector((state) => state.wishlist.value);

  return (
    <>{favorites.length > 0 ? <Products data={favorites} /> : <Empty />}</>
  );
};

export default Favorites;
