import { styled, css } from '~/libs/styled';

interface StyledButtonProps {
  variant: 'primary' | 'secondary' | 'icon';
}

export const Button = styled.button<StyledButtonProps>`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.2s;

  ${(props) =>
    props.variant === 'primary' &&
    css`
      background-color: #3b82f6;
      color: white;
      &:hover {
        background-color: #2563eb;
      }
    `}

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background-color: #f3f4f6;
      color: #4b5563;
      &:hover {
        background-color: #e5e7eb;
      }
    `}
  
  ${(props) =>
    props.variant === 'icon' &&
    css`
      padding: 0.5rem;
      border-radius: 9999px;
      color: #4b5563;
      &:hover {
        background-color: #f3f4f6;
      }
    `}
`;
