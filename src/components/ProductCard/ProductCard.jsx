import React from "react";
import css from "./productCard.module.css";
import { Link } from "react-router-dom";

export default React.memo(function ProductCard({ img, title, square, path, isOdd }) {
  return (
    <Link to={`products/${path}`}>
      <div className={`${css.productCard_wrapper} wow fadeInLeft`}>
        <img src={img} alt="product" />
        <div className={css.productCard_desc}>
          <h1>{title}</h1>
          <h1>{square}</h1>
        </div>
      </div>
    </Link>
  );
});
