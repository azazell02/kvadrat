import React from 'react';
import css from "./BenefitCard.module.css"

export default function BenefitCard({id, benefit, desc}) {
  return (
    <>
      <div className={css.benefitCard_wrapper}>
        <div className={css.benefitCard_left}>
          <h1>0{id}</h1>
          <h2>{benefit}</h2>
        </div>
        <div className={css.benefitCard_right}>
          <h1>{desc}</h1>
        </div>
      </div>
      <hr />
    </>
  );
}
