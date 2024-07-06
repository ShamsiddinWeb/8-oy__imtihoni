import React from "react";
import "./Skeleton.scss"

const Skeleton = () => {
  return (
    <div>
      <section className="skeleton">
        <div className="container">
          <div className="skeleton__cards">
            {Array(8)
              .fill("")
              .map((_, inx) => (
                <div className="skeleton__card" key={inx}>
                  <div className="skeleton__card__img"></div>
                  <div className="skeleton__card__content">
                    <div className="skeleton__card__content__title"></div>
                    <div className="skeleton__card__content__box">
                      <div className="skeleton__card__content__box__price"></div>
                      <div className="skeleton__card__content__box__btn"></div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skeleton;
