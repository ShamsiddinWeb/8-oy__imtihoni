import React from "react";
import { Link } from "react-router-dom";
import "./Search.scss"

const Search = ({ filterData, searchValue, width, left }) => {
  let searchItem = filterData?.slice(0, 5)?.map((el) => (
    <div key={el.id} className="search__content">
      <img src={el.url[0]} alt={el.title} />
      <Link to={`/products/${el.id}`}>{el.title}</Link>
    </div>
  ));

  return (
    <div>
      {searchValue.trim() ? (
        <div style={{ width: width, left: left }} className="search">
          {searchItem}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Search;
