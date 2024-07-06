import React, { useState } from "react";
import img1 from "../../assets/ok.png";
import img2 from "../../assets/vk.png";
import img3 from "../../assets/tg.png";
import img4 from "../../assets/wt.png";
import img5 from "../../assets/tel.png";
import "./Details.scss";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import line from "../../assets/line.png";
import { Link, useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../context/api/productApi";
import { useDispatch, useSelector } from "react-redux";
import { toggleHeart } from "../../context/slices/wishlistSlice";
import SingleSkeleton from "../singleSkeleton/SingleSkeleton";

const Details = () => {
  const { id } = useParams();
  let wish = useSelector((state) => state.wishlist.value);
  const { data, isLoading } = useGetProductByIdQuery(id);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      {isLoading ? (
        <SingleSkeleton />
      ) : (
        <div className="detailComponent__wrapper">
          <div className="container">
            <div className="line">
              <Link>Главная</Link>
              <img src={line} alt="" />
            </div>
            <div className="detailComponent__section">
              <div className="detailComponent__img">
                <img src={data?.url} alt="img" />
              </div>
              <div className="detailComponent__info">
                <h2>{data?.title}</h2>
                <div className="scott">
                  <div>
                    <p>Scott</p>
                    <p>Артикул : 7655-188</p>
                    <span>В наличии</span>
                  </div>
                  <article>
                    <span>
                      <img src={img1} alt="" />
                    </span>
                    <span>
                      <img src={img2} alt="" />
                    </span>
                    <span>
                      <img src={img3} alt="" />
                    </span>
                    <span>
                      <img src={img4} alt="" />
                    </span>
                    <span>
                      <img src={img5} alt="" />
                    </span>
                  </article>
                </div>
                <div className="price">
                  <h2>${data?.price}</h2>
                  <del>${data?.price * 1.5}</del>
                </div>
                <p>{data?.text}</p>
                <div className="shop">
                  <article>
                    <button onClick={handleDecrease}>-</button>
                    <span>{quantity}</span>
                    <button onClick={handleIncrease}>+</button>
                  </article>
                  <button className="shopBtn">В корзину</button>
                  <button
                    onClick={() => dispatch(toggleHeart(data))}
                    className="likeBtn"
                  >
                    {wish?.some((item) => item.id === data?.id) ? (
                      <FaHeart style={{ color: "#454545" }} />
                    ) : (
                      <FaRegHeart />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="specification__section">
              <div className="specification__title">
                <h1>Характеристика</h1>
              </div>
              <div className="specification__items">
                <article>
                  <p>Цвет</p>
                  <span>Жёлтый</span>
                </article>
                <article className="bir">
                  <p>Год</p>
                  <span>2016</span>
                </article>
                <article>
                  <p>Диаметр колеса</p>
                  <span>27.5</span>
                </article>
                <article className="bir">
                  <p>Материал рамы</p>
                  <span>Карбон</span>
                </article>
                <article>
                  <p>Размер</p>
                  <span>L</span>
                </article>
                <article className="bir">
                  <p>Страна</p>
                  <span>Швейцария</span>
                </article>
                <article>
                  <p>Производитель</p>
                  <span>Scott</span>
                </article>
                <article className="bir">
                  <p>Покрышки</p>
                  <span>
                    Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless
                    Easy / PaceStar compound{" "}
                  </span>
                </article>
                <article>
                  <p>Рама</p>
                  <span>
                    Scale Carbon / HMX-технология / технология IMP / Коническая
                    рулевая труба / BB92 / Технология SDS / Дропауты IDS SL
                  </span>
                </article>
                <article className="bir">
                  <p>Подседельный Штырь</p>
                  <span>
                    Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm
                    900 Series: Carbon 2B SDS / 34.9mm
                  </span>
                </article>
                <article>
                  <p>Седло</p>
                  <span>Ritchey WCS Streem V3 Titanium rails</span>
                </article>
                <article className="bir">
                  <p>Вилка</p>
                  <span>
                    Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle
                    / коническая рулевая труба / Удалённая блокировка,
                    регулировка отскока / ход 100mm
                  </span>
                </article>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
