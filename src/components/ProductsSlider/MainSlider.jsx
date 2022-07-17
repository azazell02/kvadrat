import React from "react";
import Slider from "react-slick";
import SliderCard from "./SliderCard";
import css from "./slider.module.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src="/images/Group 241.svg"
      alt="nextArrow"
      className={className}
      style={style}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src="/images/Group 242.svg"
      alt="prevArrow"
      className={className}
      style={style}
      onClick={onClick}
    />
  );
}

function MainSlider({ products, productKeys }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className={css.main_slider}>
      {productKeys.map((item) => (
        <Slider key={item} {...settings}>
          {products[item].map(
            el => <SliderCard key={el} el={el} />
          )}
        </Slider>
      ))}
    </div>
  );
}

export default MainSlider;
