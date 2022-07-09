import React from 'react';
import { BenefitsList } from '../../constants/BenefitsList';
import BenefitCard from '../BenefitCard/BenefitCard';
import css from "./benefits.module.css"
export default function Benefits() {
  return (
    <div className={"container " + css.benefits_wrapper}>
      <h1>Преимущества</h1>
      {
        BenefitsList.map((benefit) => <BenefitCard key={benefit.id} {...benefit}/>)
      }
      <img className='container' src='/images/Group 269.png' alt="#"/>
    </div>
  );
}
