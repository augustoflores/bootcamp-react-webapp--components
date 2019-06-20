import React from 'react';

import styles from './index.module.css';

const NavbarMenuItem = ({ text }) => (
  <li className={styles.navbarMenuItem}>
    { text }
  </li>
)

export default NavbarMenuItem;
