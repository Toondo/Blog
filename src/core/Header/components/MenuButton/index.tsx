'use client';

import { Menu } from 'lucide-react';
import React from 'react';

import styles from './styles.module.css';

interface MenuButtonProps {
  onClick?: () => void;
}

const MenuButton = ({ onClick }: MenuButtonProps) => {
  return (
    <button className={styles.menuButton} onClick={onClick}>
      <Menu size={24} />
    </button>
  );
};

export default MenuButton;
