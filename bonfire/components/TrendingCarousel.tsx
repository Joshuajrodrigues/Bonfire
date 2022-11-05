import Image from "next/image";
import React, { FunctionComponent } from "react";
import { IPopularPosts } from "../pages";
import styles from '../styles/Carousel.module.css'
const TrendingCarousel: FunctionComponent<{
  popularPosts: IPopularPosts[];
}> = ({ popularPosts }) => {
  return (
    <>
      {popularPosts?.map((post) => (
        <div className={styles.container} key={post.mal_id}>
          <Image width={200} height={200} src={post.animeImg} />
          {post.animeTitle}
        </div>
      ))}
    </>
  );
};

export default TrendingCarousel;
