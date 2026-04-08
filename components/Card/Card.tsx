import styles from "./Card.module.css";
import "./Card";
import { JSX } from "react";
import Image from "next/image";
import Like from "../Like/Like";
import Catalina from "../../public/Catalina.svg";
import arrow from "../../public/arrow.svg";

export default function Card(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles["card-media"]}>
        <Image src={Catalina} alt="Картинка поста" loading="eager"/>
      </div>
      <div className={styles["main-card"]}>
        <div className={styles["tags-card"]}>
          <p>Front-end · 1 месяц назад</p>
          <Like />
        </div>
        <div className={styles["text-card"]}>
          <h3>Как работать с CSS Grid</h3>
          <p className={styles["card-description"]}>
            Грид-раскладка (CSS Grid Layout) представляет собой двумерную
            систему сеток в CSS. Гриды подойдут и для верстки основных областей
            страницы..
          </p>
        </div>
      </div>
      <div className={styles["footer-card"]}>
        <p>3 минуты</p>
        <button className={styles.button}>
          Читать
          <Image src={arrow} alt="Стрелка" />
        </button>
      </div>
    </div>
  );
}
