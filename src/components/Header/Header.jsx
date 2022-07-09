import React from 'react';
import css from "./header.module.css"
export default function Header() {
  return (
    <>
      <header className={css.header}>
        <img src="images/Frame 9.svg" alt="kvadrat" />
        <nav className={css.nav}>
          <a href='/Main'>Главная</a>
          <a href='/Benefits'>Преимущества</a>
          <a href='/Products'>Наши продукты</a>
          <a href='/Cases'>Кейсы</a>
          <a href='/Feedback'>Отзывы</a>
          <a href='/Map'>Карта</a>
        </nav>
      </header>
    </>
  );
}

