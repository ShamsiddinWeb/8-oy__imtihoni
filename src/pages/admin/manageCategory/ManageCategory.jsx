import React, { useEffect, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { useUpdateCategoryMutation, useDeleteCategoryMutation } from "../../../context/api/categoryApi";
import { useGetCategoryQuery } from "../../../context/api/categoryApi";
import Modal from "../../../components/modal/Modal";
import "./ManegaCategory.scss"

const ManageCategory = () => {
  const { data: categories } = useGetCategoryQuery();
  const [modulToggle, setModulToggle] = useState(null);
  const [DeleteCategory] = useDeleteCategoryMutation();
  const [UpdateCategory, { isLoading, isSuccess }] =
    useUpdateCategoryMutation();

  const handleDeleteCategory = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to remove ${id} from the cart?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        DeleteCategory(id);
        Swal.fire(
          "Deleted!",
          `${id} has been removed from the cart.`,
          "success"
        );
      }
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    let category = {
      title: modulToggle.title,
    };
    UpdateCategory({ id: modulToggle.id, body: category });
  };

  useEffect(() => {
    setTimeout(() => {
      if (isSuccess) {
        setModulToggle(null);
      }
    }, [500]);
  }, [isSuccess]);

  let categoryItems = categories?.map((category) => (
    <li key={category.id}>
      {category.title}
      <div>
      <BiEditAlt onClick={() => setModulToggle(category)} />
      <RiDeleteBin6Line onClick={() => handleDeleteCategory(category.id)} />
      </div>
    </li>
  ));

  return (
    <div>
      <div className="menage__category">
        <h1 className="menage__category__title">ManageCategory</h1>
        <ul>{categoryItems}</ul>
        {modulToggle ? (
          <Modal setModulToggle={setModulToggle}>
            <form onSubmit={handleUpdate} className="menage__category__form">
              <input
                className="menage__category__form__input"
                value={modulToggle?.title}
                onChange={(e) =>
                  setModulToggle((prev) => ({ ...prev, title: e.target.value }))
                }
                type="text"
                placeholder="Category name"
              />
              <button className="menage__category__form__btn">
                {isLoading ? "Saving..." : "Save"}
              </button>
            </form>
          </Modal>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ManageCategory;
