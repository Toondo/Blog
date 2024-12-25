import styled from 'styled-components';

export const SearchFormContainer = styled.form`
  position: relative;
`;

export const SearchInput = styled.input`
  padding: 0.25rem 0.5rem 0.25rem 2rem;
  background-color: white;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  &:focus {
    outline: none;
    ring: 1px solid #9ca3af;
  }
`;

export const SearchIcon = styled.span`
  position: absolute;
  left: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
`;
