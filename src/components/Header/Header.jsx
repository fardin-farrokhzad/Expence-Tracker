import React from 'react';
import styles from './Header.module.css';
import { NavLink, Link } from 'react-router';
import Logo from '/src/assets/svg/outline/logo.svg?react';

function Header() {
  return (
    <nav className={styles.nav}>
      {/* Logo that links to home (Dashboard) */}
      <Link to='/' className={styles.logoLink}>
        <Logo className={styles.logo} />
      </Link>

      {/* Navigation Links */}
      <div className={styles.wrapper}>
        <NavLink to='/dashboard' end className={({ isActive }) => (isActive ? `${styles.item} ${styles.active}` : styles.item)}>
          داشبورد
        </NavLink>

        <NavLink to='/transactions' className={({ isActive }) => (isActive ? `${styles.item} ${styles.active}` : styles.item)}>
          لیست هزینه‌ها
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
