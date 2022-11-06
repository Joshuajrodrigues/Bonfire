import Image from "next/image";
import React, { FunctionComponent } from "react";
import { ISearchResult } from "./Search";
import styles from "./styles/Search.module.css";
const SearchCards: FunctionComponent<{
  item: ISearchResult;
}> = ({ item }) => {
  return (
    <div className={styles.searchCard}>
      <Image width={70} height={100} src={item.animeImg} />
      <div>
        <span>{item.animeTitle}</span>
        <p>{item.status}</p>
      </div>
    </div>
  );
};

export default SearchCards;
