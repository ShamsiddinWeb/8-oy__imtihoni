import React from "react";
import "./FormCart.scss";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import { deleteAllCart } from "../../context/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

let initialState = {
  UserName: "",
  tel: "",
  email: "",
  adress: "",
  comment: "",
};

const FormCart = () => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const { formData, handleChange, setFormData } =
    useGetInputValue(initialState);

  const handleLogin = (e) => {
    e.preventDefault();
    
    let my_text = `Result is: %0A-UserName: ${formData.UserName} %0A-Tel: ${formData.tel} %0A-Email: ${formData.email} %0A-Address: ${formData.adress} %0A-Comment: ${formData.comment}`;

    const BOT_TOKEN = "6708331572:AAGi5u0j5WT-UkQ0u7eU69qHg3ZCE59DKbc";
    const CHAt_ID = "-1002028151929";
    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAt_ID}&text=${my_text}&parse_mode=html`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    alert("Xabar muvaffaqiyatli jo'natildi");
    dispatch(deleteAllCart())
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleLogin} className="form">
      <div className="container">
        <div className="form__start">
          <div className="form__start-card">
            <h3>Оформление</h3>
            <article>
              <input
                onChange={handleChange}
                name="UserName"
                type="text"
                placeholder="ФИО"
                value={formData.UserName}
                required
              />
              <input
                onChange={handleChange}
                name="tel"
                type="text"
                placeholder="телефон"
                value={formData.tel}
                required
              />
              <input
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="Электронная почта"
                value={formData.email}
                required
              />
            </article>
          </div>
          <div className="form__start-card2">
            <h3>Доставка</h3>
            <input
              onChange={handleChange}
              name="adress"
              type="text"
              placeholder="Адрес доставки"
              value={formData.adress}
              required
            />
            <textarea
              onChange={handleChange}
              name="comment"
              id=""
              placeholder="Комментарий"
              value={formData.comment}
              required
            ></textarea>
          </div>
        </div>
        <div className="form__payment">
          <h3>Оплата</h3>
          <article>
            <div>
              <p>Товары.............................................</p>
              <p>12 300₽</p>
            </div>
            <div>
              <p>Доставка..............................................</p>
              <p>580₽</p>
            </div>
          </article>
          <h2>12 800₽</h2>
          <div className="form__payment-end">
            <button type="submit">Купить</button>
            <p>Я согласен на обработку моих персональных данных</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormCart;
