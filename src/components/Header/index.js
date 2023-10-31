import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a href="ok">
        <FaHome size={24} />
      </a>
      <a href="ok">
        <FaUserAlt size={24} />
      </a>
      <a href="ok">
        <FaSignInAlt size={24} />
      </a>
    </Nav>
  );
}
