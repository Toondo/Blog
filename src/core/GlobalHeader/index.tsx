'use client';
import React, { useState } from 'react';
import * as Styled from './styled';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import SearchForm from './components/Search';
import Share from './components/Share';

const GlobalHeader = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: any) => {
    e.preventDefault();
    console.log('Search:', searchQuery);
    // 여기에 검색 로직을 구현하세요
  };

  return (
    <Styled.HeaderContainer>
      <Styled.HeaderContent>
        <Logo />
        <Navigation />
        {/* 검색 및 공유 */}
        <Styled.SearchShareContainer>
          <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={handleSearch} />
          <Share />
        </Styled.SearchShareContainer>
      </Styled.HeaderContent>
    </Styled.HeaderContainer>
  );
};

export default GlobalHeader;
