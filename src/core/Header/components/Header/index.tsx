'use client';

import React from 'react';

import styles from './styles.module.css';
import Logo from '../Logo';
import MenuButton from '../MenuButton';
import SearchInput from '../SearchInput';


const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Logo />
        <div className={styles.rightSection}>
          <SearchInput placeholder="도시 검색..." />
          <MenuButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
