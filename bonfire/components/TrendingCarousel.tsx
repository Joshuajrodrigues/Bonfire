import Image from "next/image";
import { ArrowFatLeft, ArrowFatRight, CaretLeft, CaretRight } from "phosphor-react";
import React, { FunctionComponent } from "react";
import { IPopularPosts } from "../pages";
import styles from "./styles/Carousel.module.css";
const TrendingCarousel: FunctionComponent<{
  popularPosts: IPopularPosts[];
}> = ({ popularPosts }) => {
  return (
    <div className={styles.carousel}>
      <button title="move left" className={styles.carousel__button + ' ' + styles.carousel__button_left}>
        <CaretLeft size={24} />
      </button>
      <div className={styles.carousel__track_container}>
        <ul className={styles.carousel__track}>
          <li className={styles.carousel__slide}>
            <img  className={styles.carousel__image}  src="/1.jpg" alt="" />
          </li>
          <li className={styles.carousel__slide}>
            <img className={styles.carousel__image}  src="/2.jpg" alt="" />
          </li>
          <li className={styles.carousel__slide}>
            <img className={styles.carousel__image}  src="/3.jpg" alt="" />
          </li>
        </ul>
      </div>
      <button title="move right" className={styles.carousel__button + ' ' + styles.carousel__button_right}>
        <CaretRight size={24} />
      </button>
      <div className={styles["carousel__nav"]}>
        <button className={styles.carousel__indicator + ' ' + styles.carousel__indicator_active}></button>
        <button className={styles.carousel__indicator}></button>
        <button className={styles.carousel__indicator}></button>
      </div>
    </div>
  );
};

export default TrendingCarousel;
