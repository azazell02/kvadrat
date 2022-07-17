import React from "react";
import css from "./feedback.module.css";
export default function FeedbackCard({src, name, feedback}) {
  return (
    <div className={css.feedback}>
      <div className={css.feedback_image}>
        <img src={src} alt="person" />
        <hr />
      </div>
      <hr />
      <div className={css.feedback_right}>
        <div className={css.person_name}>
          <h1>{name}</h1>
        </div>
        <hr />
        <div className={css.feedback_desc}>
          {feedback}
        </div>
      </div>
    </div>
  );
}
