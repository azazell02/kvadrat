// Slider with feedbacks
import React from "react";
import FeedbackCard from "./FeedbackCard";
import { FeedbackList } from "../../constants/FeedbackList";
import Slider from "react-slick";
import css from "./feedback.module.css";

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

export default function Feedback() {
  const settings = {
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div id="Feedback">
      <h1 className={"container " + css.feedback_title}>Отзывы</h1>
      <Slider {...settings}>
        {FeedbackList.map((feedback) => (
          <FeedbackCard key={feedback.id} {...feedback} />
        ))}
      </Slider>
    </div>
  );
}
