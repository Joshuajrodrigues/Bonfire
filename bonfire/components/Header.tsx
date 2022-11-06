import { List, MagnifyingGlass, XCircle } from 'phosphor-react';
import React, { useState } from 'react'
import Search from './Search';
import styles from './styles/Header.module.css'
const Header = () => {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
  return (
    <header className={styles.header}>
    {!isSearchVisible ? (
      <>
        <h1>Bonfire🔥 Anime</h1>
        <span className={styles.buttonControl}>
          <span
            onClick={() => {
              setIsSearchVisible(true);
            }}
          >
            <MagnifyingGlass size={32} />
          </span>
          <span>
            <List size={32} />
          </span>
        </span>
      </>
    ) : (
      <>
        <h1>🔥</h1>
        <div className={styles.mobileSearchOn}>
          <Search />{" "}
          <span>
            <XCircle
              style={{ marginLeft: "1em", cursor: "pointer" }}
              onClick={() => {
                setIsSearchVisible(false);
              }}
              size={32}
            />
          </span>
          <span className={styles.hamburgerMenu}>
            <List size={32} />
          </span>
        </div>
      </>
    )}
    <div className={styles.largeSearch}>
      <Search />
      <span>
        <List size={32} />
      </span>
    </div>
  </header>
  )
}

export default Header