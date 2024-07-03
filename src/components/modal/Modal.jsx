import React from "react";

const Modal = ({ children, setShow }) => {
  return (
    <>
      <div onClick={() => setShow(false)} className="modal__start"></div>
      <div className="modal">{children}</div>
    </>
  );
};

export default Modal;
