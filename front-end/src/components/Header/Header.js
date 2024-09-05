import React from 'react';
import styles from './Header.module.css'; // CSS Module'ı içe aktar

const Header = ({ title, subtitle }) => (
  <header className={styles.header}>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.subtitle}>{subtitle}</p>
  </header>
);

export default Header;
