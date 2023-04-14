import React from 'react';
import styles from './navbar.module.scss'
import Link from 'next/link';

function Navbar() {
  const links = ['cases', 'services', 'culture', 'team', 'blog', 'contact'];
  return (
    <div className='navbar'>
      <div>ZT</div>
      <ul>
        {links.map((link, index) => (
          <li key={index + link}>
            <Link href={"/"}>{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar
