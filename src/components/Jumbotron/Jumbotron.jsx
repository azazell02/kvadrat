import React from 'react';
import css from "./jumbotron.module.css"
export default function Jumbotron() {
  return (
    <>
      <div className={css.jumbotron}>
        <div className={css.jumbotron_center}>
          <h1>Добро пожаловать</h1>
          <h1>Студия интерьера квадрат</h1>
          <h1>Ваше отражение</h1>
        </div>
      </div>
    </>
  );
}
