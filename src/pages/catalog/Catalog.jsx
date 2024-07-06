import React, {useEffect} from "react";
import CatalogComponent from "../../components/catalogs/Catalogs";
import { catalog } from "../../data/catalogData/CatalogData";



const CatalogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="catalogpage">
      <CatalogComponent Item={false} catalogItems={catalog} />
    </div>
  );
};

export default CatalogPage;
