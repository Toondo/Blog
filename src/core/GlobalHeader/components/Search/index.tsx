import React from 'react';
import { Search } from 'lucide-react';
import * as Styled from './styled';

interface SearchFormProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ searchQuery, setSearchQuery, onSearch }) => {
  return (
    <Styled.SearchFormContainer onSubmit={onSearch}>
      <Styled.SearchInput
        type="text"
        placeholder="검색..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Styled.SearchIcon>
        <Search size={18} />
      </Styled.SearchIcon>
    </Styled.SearchFormContainer>
  );
};

export default SearchForm;
