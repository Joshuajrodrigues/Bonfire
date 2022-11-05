import React, { useState } from "react";
import { debounce, isArray, isEmpty } from "lodash";
import styles from "./styles/Search.module.css";
import { IPopularPosts } from "../pages";
const Search = () => {
  const [searchResult, setSearchResult] = useState<IPopularPosts[]>([]);

  const handleSearch =  async(searchTerm = "") => {
    console.log("search", searchTerm);

    let res = await fetch(
      `http://localhost:4000/animix/search?keyw=${searchTerm}`
    );
    const list: IPopularPosts[] = await res.json();

    if(isArray(list)){
      setSearchResult(list);
    }else{
      setSearchResult([])
    }
  };
  const debouncedSearch = debounce(handleSearch, 600);
  return (
    <div>
      <input
        onChange={(event) => {
          debouncedSearch(event.target.value);
        }}
        className={styles.search}
        type="text"
        placeholder="Search"
      />
      {searchResult?.length > 0 && (
        <div className={styles.searchDropdown}>
          {searchResult?.map((item) => (
            <div>{item.animeTitle}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
