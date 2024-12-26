'use client';

import React from 'react';

import * as Styled from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'icon';
  children: React.ReactNode;
}

const Button = ({ variant = 'primary', children, ...props }: ButtonProps) => {
  return (
    <Styled.Button variant={variant} {...props}>
      {children}
    </Styled.Button>
  );
};

export default Button;
