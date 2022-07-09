import React from "react";
import css from "./footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={css.input_wrapper}>
        <input type="text" placeholder="Имя" />
        <input type="phone" placeholder="+996557120820" />
        <input type="text" placeholder="Почта" />
        <button>Заказать звонок</button>
      </div>
      <div className={css.footer_center}>
        <img src="/images/bigLogo.svg" alt="logo" />
        <div className={css.footer_nav}>
          <a href="/Portfolio">Портфолио</a>
          <a href="/Service">Услуги</a>
          <a href="/Price">Стоимость</a>
          <a href="/Feedback">Отзывы</a>
          <a href="/Contacts">Контакты</a>
        </div>
        <div className={css.footer_contacts}>
          <h1>Контакты</h1>
          <span>+996 (703)697 540</span>
          <span>+996 (505)050 153</span>
          <span>+996 (999)600 615</span>
        </div>
      </div>
      <div className={css.mediaIcons}>
        <img src="/images/icons/whatsApp.svg" alt="whatsApp" />
        <img src="/images/icons/facebook.svg" alt="facebook" />
        <img src="/images/icons/instagram.svg" alt="instagram" />
        <img src="/images/icons/youtube.svg" alt="youtube" />
        <img src="/images/icons/linkedin.svg" alt="linkedin" />
        <img src="/images/icons/telegram.svg" alt="telegram" />
        <img src="/images/icons/be.svg" alt="be" />
      </div>
    </footer>
  );
}
