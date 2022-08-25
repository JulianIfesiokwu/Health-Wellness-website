import React from "react";
import { motion } from "framer-motion";

const OneService = ({ massage }) => {
  const { name, id, img, duration, price } = massage;
  const numberFormatter = Intl.NumberFormat("en-US");

  return (
    <motion.div layout className="service-card" key={id}>
      <div className="img-container">
        <img src={img} alt={name} loading="lazy" />
        <div className="details">
          <h4>{name}</h4>
          <p>Max-duration: {duration} hour(s)</p>
          <p className="price">&#8358;{numberFormatter.format(price)}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default OneService;
