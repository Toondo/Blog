import styled from 'styled-components';

export const ShareButton = styled.button`
  color: #4b5563;
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    color: #1f2937;
  }
`;

export const ShareDropdown = styled.div`
  position: absolute;
  right: 0;
  margin-top: 0.5rem;
  width: 12rem;
  background-color: white;
  border-radius: 0.375rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border: 1px solid #e5e7eb;
`;

export const ShareLink = styled.button`
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #374151;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #f3f4f6;
  }
  svg {
    display: inline-block;
    margin-right: 0.5rem;
    vertical-align: middle;
  }
`;
