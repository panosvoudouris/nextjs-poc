import React from 'react';
import Link from 'next/link';

const Nav = () => (
  <nav>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/benefits">
      <a>Benefits</a>
    </Link>
  </nav>
);

export default Nav;
