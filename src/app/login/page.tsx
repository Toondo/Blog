'use client';

// import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import { fetchLoginCheck } from '~/requests/login';

// import { useFetchLoginCheck } from './hooks';
import { LoginForm } from './style'; // 스타일 임포트

const LoginPage = () => {
  const [userName, setUsername] = useState('');
  const [userPassword, setPassword] = useState('');
  //   const [click, setClick] = useState(false);
  //   const [data, query] = useFetchLoginCheck({ userName, userPassword });
  const router = useRouter();
  const handleLogin = async (userName: string, userPassword: string) => {
    // 로그인 요청 보내기
    const result = await fetchLoginCheck(userName, userPassword);

    // 결과 확인
    if (result.result) {
      // 로그인 성공 시 추가적인 처리
      alert(`Hi, ${result?.userName}`);
      router.push('http://localhost:3000');
    } else {
      // 로그인 실패 시 추가적인 처리
      alert('로그인 실패: 아이디 또는 비밀번호를 확인해주세요.');
    }
  };

  return (
    <LoginForm>
      <h2>로그인</h2>
      <input type="text" placeholder="사용자 이름" value={userName} onChange={(e) => setUsername(e.target.value)} />
      <input
        type="password"
        placeholder="비밀번호"
        value={userPassword}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={() => handleLogin(userName, userPassword)}>
        로그인
      </button>
    </LoginForm>
  );
};

export default LoginPage;
