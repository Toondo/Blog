'use client';

import { Sun } from 'lucide-react';
import React from 'react';

import styles from './styles.module.css';

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <Sun size={32} color="#F59E0B" />
      <h1 className={styles.logoText}>Daily</h1>
    </div>
  );
};

export default Logo;
