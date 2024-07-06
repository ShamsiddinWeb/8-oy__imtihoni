import React from "react";
import "../../components/modal/Modal.scss";
import { GoArrowRight } from "react-icons/go";

const Request = () => {
  return (
    <div className="request__wrapper">
      <h2>Заполните, и мы перезвоним</h2>
      <input type="text" placeholder="ФИО" />
      <input type="text" placeholder="телефон" />
      <button>
        <p>Весь каталог</p>
        <GoArrowRight />
      </button>
    </div>
  );
};

export default Request;
