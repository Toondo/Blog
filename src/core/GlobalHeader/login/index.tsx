'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import { LoginMenuContainer, DropdownMenu, LoginButton, SingUpButton } from './style';

interface LoginProps {
  isLogin: boolean;
  children: React.ReactNode;
}

const LoginMenu = ({ isLogin, children }: LoginProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  return (
    <LoginMenuContainer onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
      {children}
      {/* <DropdownMenu show={showDropdown}> */}
      <DropdownMenu>
        {isLogin ? (
          <div>
            <button onClick={() => alert('회원 정보')}>회원 정보</button>
            <button
              onClick={() => {
                /* 로그아웃 로직 */
              }}
            >
              로그아웃{showDropdown}
            </button>
          </div>
        ) : (
          <div>
            <SingUpButton onClick={() => alert('회원가입')}>회원가입</SingUpButton>
            <LoginButton
              onClick={() => {
                router.push('/login');
              }}
            >
              로그인
            </LoginButton>
          </div>
        )}
      </DropdownMenu>
    </LoginMenuContainer>
  );
};

export default LoginMenu;
