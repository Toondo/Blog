'use client';

import { Search } from 'lucide-react';
import React from 'react';

import styles from './styles.module.css';

interface SearchInputProps {
  onSearch?: (value: string) => void;
  placeholder?: string;
}

const SearchInput = ({ onSearch, placeholder }: SearchInputProps) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch(e.currentTarget.value);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <input className={styles.input} type="text" placeholder={placeholder} onKeyPress={handleKeyPress} />
      <div className={styles.iconWrapper}>
        <Search size={20} />
      </div>
    </div>
  );
};

export default SearchInput;
