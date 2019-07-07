import React, { useState } from 'react';


import SearchInput from '../SearchInput';
import NavbarMenuList from '../NavbarMenuList';

  const INITIAL_MENU =  [
    { text: 'Home', href: '/' },
    { text: 'New Pet', href: '/new-pet' },
    { text: 'Dropdown', options: [{ text: 'Action',href:'#' }, { text: 'Another action',href:'#' }, { text: 'Something else here',href:'#' }] },
  ];

function Navbar (){
  const [state] = useState(INITIAL_MENU)

  return(
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">PET ADOPT STORE</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavbarMenuList list={state} />

          <form className="form-inline my-2 my-lg-0">
            <SearchInput className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
  )
}

export default Navbar;
