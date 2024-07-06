import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import Product from "../../components/product/Product";
import Empty from "../../components/empty/Empty";

const Favorites = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const favorites = useSelector((state) => state.wishlist.value);
  console.log(favorites);

  return (
    <>{favorites.length > 0 ? <Product data={favorites} /> : <Empty />}</>
  );
};

export default Favorites;
