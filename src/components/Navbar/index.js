import React, { Component } from 'react';

import NavbarMenu from '../NavbarMenu';
import NavbarMenuItem from '../NavbarMenuItem';

import styles from './index.module.css';

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeOptions: [],
    };
  }

  render() {
    return (
      <nav className={styles.navbar}>
        <NavbarMenu>
          <NavbarMenuItem text="Home" />
          <NavbarMenuItem text="Work" />
          <NavbarMenuItem text="MyPets" />
        </NavbarMenu>
      </nav>
    )
  }
}

export default Navbar;
