import React from 'react';

import styles from './index.module.css';

const NavbarMenu = ({ children }) => (
  <ul className={styles.navbarMenu}>
    { children }
  </ul>
)

export default NavbarMenu;
