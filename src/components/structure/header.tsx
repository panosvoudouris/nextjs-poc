import React from 'react';
import Nav from './nav';
import Link from 'next/link';

const Header = () => (
  <div>
    <header className="white z-index-200 m-0 sticky mb-4">
      <div className="constrained mh-auto ph-6">
        <Link href="/">
          <img src="/images/ca-logo_100px.svg" width="75" height="75"></img>
        </Link>
      </div>
    </header>
    <Nav />
  </div>
);

export default Header;
