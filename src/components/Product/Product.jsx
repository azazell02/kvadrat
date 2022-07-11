import React from 'react';
import css from "./product.module.css";
import ProductCard from '../ProductCard/ProductCard';
import { ProductList } from '../../constants/ProductList';

export default function Product() {
  return (
    <div id='Products' className={"container " + css.product_wrapper}>
      <h1>Наши продукты</h1>
      <div className={css.productCards}>
        {
          ProductList.map((product) => <ProductCard key={product.id} {...product} />)
        }
      </div>
    </div>
  );
}

