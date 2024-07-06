import React, { useEffect } from "react";
import { IoIosMenu } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const AdminHeader = ({ setClose }) => {
  const handleButtonClick = () => {
    if (window.innerWidth <= 920) {
      setClose(true);
    } else {
      setClose((prev) => !prev);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 920) {
        setClose(true);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setClose]);

  return (
    <div className="admin__header">
      <button onClick={handleButtonClick}>
        <IoIosMenu />
      </button>
      <div>
        <p>Admin</p> <FaUser />
      </div>
      
    </div>
  );
};

export default AdminHeader;
