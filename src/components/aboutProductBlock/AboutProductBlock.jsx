import React from "react";
import css from "./aboutProduct.module.css";

export default function AboutProductBlock({ text, isOdd }) {
  return (
    <div
      className={`${!isOdd ? css.block : css.blockBlack} wow zoomIn`}
      data-wow-duration="1s"
    >
      <h1>{text}</h1>
    </div>
  );
}
