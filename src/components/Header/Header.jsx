import React from "react";
import { Link } from "react-router-dom";
import css from "./header.module.css";

export default function Header() {
  return (
    <>
      <header className={css.header}>
        <Link to={"/"}>
          <img src="/images/Frame 9.svg" alt="kvadrat" />
        </Link>
        <nav className={css.nav}>
          <a href="/">Главная</a>
          <a href="#Benefits">Преимущества</a>
          <a href="#Products">Наши продукты</a>
          <a href="/Cases">Кейсы</a>
          <a href="#Feedback">Отзывы</a>
          <a href="/Map">Карта</a>
        </nav>
      </header>
    </>
  );
}
