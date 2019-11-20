import React from 'react';
import Link from 'next/link';

const aClasses: string =
  'text-center flex-grow-1 no-wrap bold heritage-blue white no-underline outline-0 focus-text-heritage-yellow lh-5 height-10 mh-2';

const Nav = () => (
  <div className="wrapper flex relative mb-5 navigation bg-heritage-blue w-full">
    <nav className="constrained flex mh-auto overflow-hidden height-10">
      <Link href="/">
        <a className={aClasses}>Home</a>
      </Link>
      <Link href="/benefits">
        <a className={aClasses}>Benefits</a>
      </Link>
    </nav>
  </div>
);

export default Nav;
