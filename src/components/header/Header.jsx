import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/icons/header__icon.svg";
import { RiMenu2Line } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { IoStatsChart } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import "./Header.scss";
import { useSelector } from "react-redux";
import Search from "../search/Search";
import { IoSearchOutline } from "react-icons/io5";
import { useGetProductsQuery } from "../../context/api/productApi";


const Header = ({ setShow }) => {
  const [toogle, setToggle] = useState(false);
  const liked = useSelector((state) => state.wishlist.value);
  const cart_items = useSelector((state) => state.cart.value);

  const navigate = useNavigate();

  const { data } = useGetProductsQuery();
  const [searchValue, setSearchValue] = useState("");
  const [filterData, setFilterData] = useState(data);

  useEffect(() => {
    setFilterData(
      data?.filter((product) =>
        product.title.toLowerCase().includes(searchValue.trim().toLowerCase())
      )
    );
  }, [searchValue]);

  return (
    <div className={`header ${toogle ? "open" : ""}`}>
      <div className="container">
        <div className="header__start">
          <div className="header__start-left">
            <Link onClick={ () => setToggle(false)} to={"/company"}>О компании</Link>
            <Link onClick={ () => setToggle(false)} to={"/payment"}>Доставка и оплата</Link>
            <Link onClick={ () => setToggle(false)} to={"/return"}>Возврат</Link>
            <Link onClick={ () => setToggle(false)} to={"/garant"}> Гарантии</Link>
            <Link onClick={ () => setToggle(false)} to={"/contact"}>Контакты</Link>
            <Link onClick={ () => setToggle(false)} to={"/blog"}>Блог</Link>
          </div>
          <div className="header__start-right">
            <p>8 (800) 890-46-56</p>
            <span onClick={() => setShow(true)}>Заказать звонок</span>
          </div>
        </div>
        <div className="header__end">
          <Link to={"/"} className="header__end-logo">
            <img src={logo} alt="" />
            
          </Link>
          <button
            onClick={() => navigate("/catalog")}
            className="header__end-btn"
          >
            <RiMenu2Line />
            <p>Каталог</p>
          </button>
          <form className="header__end-form">
            <input
              className="header__end-form__inp"
              type="search"
              value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Поиск по товарам"
            />
            <IoSearch />
              <Search
                width={"580px"}
                left={"34%"}
                filterData={filterData}
                searchValue={searchValue}
              />
          </form>
          <div className="header__menu-burgers">
            <button
              className="header__menu"
              id="menu-burger"
              onClick={() => setToggle(!toogle) }
            >
              <span className="header__menu-span"></span>
              <span className="header__menu-span"></span>
              <span className="header__menu-span"></span>
            </button>
          </div>

          <div className="header__end-card">
            <span className="header__end-catalog">
              <RiMenu2Line />
              <p>Каталог</p>
            </span>
            <Link className="header__end-card__favorites" to={"/favorites"}>
              <FaRegHeart />
              <p>Избранное</p>
              <span className="header__end-count1">{liked.length}</span>
            </Link>
            <Link className="header__end-card__favorites">
              <IoStatsChart />
              <p>Сравнение</p>
            </Link>
            <Link className="header__end-card__favorites" to={"/basket"}>
              <FiShoppingCart />
              <p>Корзина</p>
              <span className="header__end-count">{cart_items.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
