import React from 'react';

import './header.css';

export function Header({ text }) {
  return (
    <nav className="header">
      <h1>
        {text}
      </h1>
    </nav>);
}

export default Header;