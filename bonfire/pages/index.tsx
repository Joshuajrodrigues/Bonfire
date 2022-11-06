import type { GetStaticProps, NextPage } from "next";
import { List, MagnifyingGlass, XCircle } from "phosphor-react";
import { useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import TrendingCarousel from "../components/TrendingCarousel";
import styles from "./../styles/Home.module.css";
export interface IPopularPosts {
  animeTitle: string;
  mal_id: string;
  animeImg: string;
  views: string;
  score: number;
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:4000/popular");
  const popularPosts: IPopularPosts[] = await res.json();
  return {
    props: {
      popularPosts,
    },
  };
};

const Home: NextPage<{ popularPosts: IPopularPosts[] }> = ({
  popularPosts,
}) => {
  return (
    <div>
      <Header />
      <main>
        <TrendingCarousel popularPosts={popularPosts} />
      </main>
    </div>
  );
};

export default Home;
