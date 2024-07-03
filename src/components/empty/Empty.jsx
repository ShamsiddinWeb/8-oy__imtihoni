import React from "react";
import empty from "../../assets/empty.jpg";
import "./Empty.scss"

const Empty = () => {
  return (
    <div className="empty">
      <img src={empty} alt="" />
    </div>
  );
};

export default Empty;
