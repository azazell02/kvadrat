import React from 'react';
import css from "./productCard.module.css"

export default function ProductCard({img, title, square}) {
  return (
    <div className={css.productCard_wrapper}>
      <img src={img} alt="product"/>
      <div className={css.productCard_desc}>
        <h1>{title}</h1>
        <h1>{square}</h1>
      </div>
    </div>
  );
}
