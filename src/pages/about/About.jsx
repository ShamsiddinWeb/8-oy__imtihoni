import React, {useEffect} from "react";
import Company from "../../components/company/Company";
import Brands from "../../components/brands/Brands";

import Blog from "../../components/Blog/Blog";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Company />
      <Brands/>
      <Blog/>
    </>
  );
};

export default About;
