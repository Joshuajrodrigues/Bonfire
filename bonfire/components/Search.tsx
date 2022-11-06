import React, { useState } from "react";
import { debounce, isArray, isEmpty } from "lodash";
import styles from "./styles/Search.module.css";
import SearchCards from "./SearchCards";

export interface ISearchResult{
  animeId:string;
  animeTitle:string;
  animeImg:string;
  status:string;
}

const Search = () => {
  const [searchResult, setSearchResult] = useState<ISearchResult[]>([]);
  const [isListVisisble,setIsListVisisble] = useState(false)
  const handleSearch =  async(searchTerm = "") => {
    console.log("search", searchTerm);

    let res = await fetch(
      `http://localhost:4000/gogoanime/search?keyw=${searchTerm}`
    );
    const list: ISearchResult[] = await res.json();

    if(isArray(list)){
      setSearchResult(list);
      setIsListVisisble(true)
    }else{
      setSearchResult([])
      setIsListVisisble(true)
    }
  };
  const debouncedSearch = debounce(handleSearch, 600);
  return (
    <div>
      <input
      autoFocus
        onChange={(event) => {
          debouncedSearch(event.target.value);
        }}
        className={styles.search}
        type="text"
        placeholder="Search"
        onFocus={()=>{setIsListVisisble(true)}}
        onBlur={()=>{setIsListVisisble(false)}}
      />
      {searchResult?.length > 0 && isListVisisble && (
        <div  className={styles.searchDropdown}>
          {searchResult?.map((item) => (
            <SearchCards key={item.animeId} item={item} />
          
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
