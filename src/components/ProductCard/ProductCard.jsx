import React from "react";
import css from "./productCard.module.css";

export default React.memo(function ProductCard({ img, title, square, path }) {
  return (
    <div className={css.productCard_wrapper}>
      <img src={img} alt="product" />
      <a href={`products/${path}`}>
        <div className={css.productCard_desc}>
          <h1>{title}</h1>
          <h1>{square}</h1>
        </div>
      </a>
    </div>
  );
});
