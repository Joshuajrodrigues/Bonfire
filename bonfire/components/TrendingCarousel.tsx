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
      <button className={styles.carousel__button+' '+ styles.carousel__button_left}>
        <CaretLeft  size={12} />
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
      <button className={styles.carousel__button+' '+ styles.carousel__button_right}>
        <CaretRight size={12} />
      </button>
      <div className="carousel__nav">
        <button className="carousel__indicator carousel__indicator_active"></button>
        <button className="carousel__indicator"></button>
        <button className="carousel__indicator"></button>
      </div>
    </div>
  );
};

export default TrendingCarousel;
