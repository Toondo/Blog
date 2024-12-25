import Link from 'next/link';
import { styled } from 'styled-components';

export const Navigation = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
  }
`;

export const NavLink = styled(Link)`
  color: #4b5563;
  text-decoration: none;
  &:hover {
    color: #1f2937;
    text-decoration: none;
  }
`;
