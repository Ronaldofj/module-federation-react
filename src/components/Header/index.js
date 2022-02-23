import React, { useState } from 'react';

import './header.css';

export function Header({ text }) {

  const [ title, setTitle ] = useState('Title')

  return (
    <nav className="header">
      <h1>
        {`${title}`}
        {text}
      </h1>
    </nav>);
}

export default Header;