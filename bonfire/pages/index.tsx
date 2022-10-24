import type { GetStaticProps, NextPage } from "next";
import TrendingCarousel from "../components/TrendingCarousel";
import styles from "../styles/Home.module.css";

export interface IPopularPosts {
  animeTitle: string;
  mal_id: string;
  animeImg: string;
  views: string;
  score: number;
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:3000/popular");
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
      <header>
        <h1>Bonfire🔥</h1>
      </header>
      <main>
        <TrendingCarousel popularPosts={popularPosts} />
      </main>
    </div>
  );
};

export default Home;
