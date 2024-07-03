import React from "react";
import Hero from "../../components/hero/Hero";
import Catalogs from "../../components/Catalogs/Catalogs";
import { useGetProductsQuery } from "../../context/api/productApi";
import Products from "../../components/products/Products";
import { catalog } from "../../data/catalogData/CatalogData";
import Nornlight from "../../components/Nornlight/Nornlight";
import Brands from "../../components/brands/Brands";
import Blog from "../../components/Blog/Blog";
import Lamps from "../../components/lamps/Lamps";

const Home = () => {
  const { data } = useGetProductsQuery();
  return (
    <div>
      <Hero />
      <Catalogs catalogItems={catalog.slice(0, 6)} />
      <Nornlight/>
      <Brands/>
      <Products data={data} />
      <Blog/>
      <Lamps/>
    </div>
  );
};

export default Home;
