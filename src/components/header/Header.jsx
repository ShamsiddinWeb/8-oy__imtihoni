import React, {useState} from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/header__icon.svg";
import { RiMenu2Line } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { IoStatsChart } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import "./Header.scss";
const Header = () => {
  const [toogle, setToggle] = useState(false);
  return (
    <div className={`header ${toogle ? "open" : ""}`}>
      <div className="container">
        <div className="header__start">
          <div className="header__start-left">
            <Link to={"/company"}>О компании</Link>
            <Link to={"/payment"}>Доставка и оплата</Link>
            <Link to={"/return"}>Возврат</Link>
            <Link to={"/garant"}> Гарантии</Link>
            <Link to={"/contact"}>Контакты</Link>
            <Link to={"/blog"}>Блог</Link>
          </div>
          <div className="header__start-right">
            <p className="header__start-right__text">8 (800) 890-46-56</p>
            <span className="header__start-right__span">Заказать звонок</span>
          </div>
        </div>
        <div className="header__end">
          <Link to={"/"} className="header__end-logo">
            <img src={logo} alt="" />
          </Link>
          <Link to={"/catalog"} className="header__end-btn">
            <RiMenu2Line />
            <p>Каталог</p>
          </Link>
          <form className="header__end-form">
            <input
              className="header__end-form__inp"
              type="text"
              placeholder="Поиск по товарам"
            />
            <IoSearch />
          </form>
          <div className="header__menu-burgers">
            <button
              className="header__menu"
              id="menu-burger"
              onClick={() => setToggle(!toogle)}
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
            <span className="header__end-card__group">
              <Link className="header__end-card__favorites"  to={"/favorites"}><FaRegHeart /></Link>
              <p>Избранное</p>
            </span>
            <span className="header__end-card__group">
              <IoStatsChart />
              <p>Сравнение</p>
            </span>
            <span className="header__end-card__group">
              <FiShoppingCart />
              <p>Корзина</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
