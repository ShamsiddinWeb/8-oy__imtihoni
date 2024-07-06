import React, {useEffect} from "react";
import Details from "../../components/details/Details";

const Detail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Details/>
    </>
  );
};

export default Detail;
