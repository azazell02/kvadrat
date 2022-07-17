import React from 'react';
import { BenefitsList } from '../../constants/BenefitsList';
import BenefitCard from '../BenefitCard/BenefitCard';
import css from "./benefits.module.css"
export default function Benefits() {
  return (
    <div id='Benefits' className={"container " + css.benefits_wrapper}>
      <h1>Преимущества</h1>
      {
        BenefitsList.map((benefit) => <BenefitCard key={benefit.id} {...benefit}/>)
      }
      <img src='/images/Group 269.png' alt="#"/>
    </div>
  );
}
