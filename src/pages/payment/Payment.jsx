import React, {useEffect} from "react";
import Delivery from "../../components/delivery/Delivery";
import Kontact from "../../components/kontect/Kontact";

const Payment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Delivery />
      <Kontact/>
    </div>
  );
};

export default Payment;
