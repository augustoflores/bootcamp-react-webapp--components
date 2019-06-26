import React from 'react'

const MenuItem = ({ text, href, active }) => (
  <li className={`nav-item ${active ? 'active' : ''}`}>
    <a
      className="nav-link"
      href={href}
    >
      { text }
    </a>
  </li>
);

export default MenuItem;
