import React, { useEffect } from "react";
import { useGetInputValue } from "../../../hooks/useGetInputValue";
import { useGetCategoryQuery } from "../../../context/api/categoryApi";
import { useCreateProductMutation } from "../../../context/api/productApi";
import { toast } from "react-toastify";
import "./CreateProduct.scss";

let initialState = {
  title: "",
  price: "",
  url: "",
  category: "",
  desc: "",
};

const CreateProduct = () => {
  const [CreateProduct, { isLoading }] = useCreateProductMutation();
  const { data } = useGetCategoryQuery();
  const { handleChange, formData, setFormData } =
    useGetInputValue(initialState);

  let categoryItems = data?.map((category) => (
    <option key={category.id} value={category.title}>
      {category.title}
    </option>
  ));

  const handleCreate = (e) => {
    e.preventDefault();
    formData.price = +formData.price;
    formData.url = formData.url.split("\n").filter((i) => i.trim());
    CreateProduct(formData);
    setFormData(initialState);
    toast.success("Product Created");
  };

  return (
    <div>
      <form className="create__form" onSubmit={handleCreate}>
        <h1 className="create__form__title">Create Product</h1>
        <div className="create__form__inputs">
          <h3 className="create__form__inputs__text">Title</h3>
          <input
            className="create__form__inputs__input"
            type="text"
            required
            onChange={handleChange}
            value={formData.title}
            name="title"
            placeholder="Title"
          />
        </div>
        <div className="create__form__inputs">
          <h3 className="create__form__inputs__text">Price</h3>
          <input
            className="create__form__inputs__input"
            type="number"
            required
            onChange={handleChange}
            value={formData.price}
            name="price"
            placeholder="Price"
          />
        </div>
        <div className="create__form__inputs">
          <h3 className="create__form__inputs__text">Images</h3>
          <textarea
            name="url"
            placeholder="Images"
            className="create__form__inputs__input"
            required
            onChange={handleChange}
            value={formData.url}
          ></textarea>
        </div>

        <div className="create__form__inputs">
          <h3 className="create__form__inputs__text">Category</h3>
          <select
            className="create__form__inputs__select"
            required
            onChange={handleChange}
            value={formData.category}
            name="category"
          >
            <option value="">Select Category</option>
            {categoryItems}
          </select>
        </div>
        <div className="create__form__inputs">
          <h3 className="create__form__inputs__text">Description</h3>
          <textarea
            name="desc"
            placeholder="Description"
            className="create__form__inputs__input"
            required
            onChange={handleChange}
            value={formData.text}
          ></textarea>
        </div>
        <button
          className="create__form__btn"
          disabled={isLoading ? true : false}
        >
          {isLoading ? "Creating..." : "Create"}
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
