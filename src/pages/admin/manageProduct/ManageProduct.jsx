import React from "react";
import {
  useGetProductsQuery,
  useDeleteProductMutation,
} from "../../../context/api/productApi";
import edit from "../../../assets/edit.png";
import del from "../../../assets/delete.png";
import "./ManageProduct.scss";
import { useDispatch } from "react-redux";

const ManageProduct = () => {
  const { data } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const dispatch = useDispatch();

  let items = data?.map((el) => (
    <div key={el.id} className="manageProduct__items-card">
      <div className="manageProduct__items-card__img">
        <img src={el?.url} alt="" />
      </div>
      <div className="manageProduct__items-card__info">
        <p>{el?.title}</p>
        <div>
          <article>
            <del>${el?.price * 1.5}</del>
            <h3>${el?.price}</h3>
          </article>
          <div className="manageProduct__items-card__btn">
            <button>
              <img src={edit} alt="" />
            </button>
            <button onClick={() => deleteProduct(el.id)}>
              <img src={del} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="manageProduct">
      <h3>Manage product</h3>
      <div className="manageProduct__items">{items}</div>
    </div>
  );
};

export default ManageProduct;
