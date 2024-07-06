import React from "react";
import "./SingleSkeleton.scss"
const SingleSkeleton = () => {
  return (
    <div>
      <section className="single-skeleton">
        <div className="container">
          <div className="single__style">
            <div className="single__style__img"></div>
            <div className="single__style__content">
              <div className="single__style__content__text"></div>
              <ul>
                <li>
                  <span></span>
                </li>
                <li>
                  <span></span>
                  <span></span>
                </li>
                <li>
                  <span></span>
                </li>
              </ul>
              <div className="single__style__content__price"></div>
              <div className="single__style__content__par"></div>
              <div className="single__style__content__btn"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleSkeleton;
