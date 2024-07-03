import React from "react";
import Catalogs from "../../components/Catalogs/Catalogs";
import { catalog } from "../../data/catalogData/CatalogData";
import Brands from "../../components/brands/Brands";
import Blog from "../../components/Blog/Blog";

const CatalogPage = () => {
  return (
    <div className="catalogpage">
      <Catalogs Items={false} catalogItems={catalog} />
      <Brands/>
      <Blog/>
    </div>
  );
};

export default CatalogPage;
