import React from "react";
import Hero from "../../components/hero/Hero";
import Nornlight from "../../components/Nornlight/Nornlight";
import Blog from "../../components/Blog/Blog";
import Lamps from "../../components/lamps/Lamps";
import { useGetProductsQuery } from "../../context/api/productApi";
import { catalog } from "../../data/catalogData/CatalogData";
import Brands from "../../components/brands/Brands";
import Product from "../../components/product/Product";
import Catalogs from "../../components/catalogs/Catalogs";


const Home = () => {
  const { data, isLoading} = useGetProductsQuery();
  return (
    <div>
      <Hero />
      <Catalogs catalogItems={catalog}/>
      <Nornlight/>
      <Brands />
      <Product data={data} isLoading={isLoading} isMarriade={true} />
      <Blog />
      <Lamps /> 
    </div>
  );
};

export default Home;
