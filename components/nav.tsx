import React from 'react';
import Link from 'next/link';

const aClasses: string =
  'text-center flex-grow-1 no-wrap bold heritage-blue white no-underline outline-0 focus-text-heritage-yellow lh-5 height-10 mh-2';

type LinkType = {
  label: string;
  href: string;
};

const links: LinkType[] = [
  { label: 'Benefits', href: '/benefits' },
  { label: 'Work', href: '#' },
  { label: 'Debt and Money', href: '#' },
  { label: 'Consumer', href: '#' },
  { label: 'Housing', href: '#' },
  { label: 'Family', href: '#' },
  { label: 'Law and Courts', href: '#' },
  { label: 'Immigration', href: '#' },
  { label: 'Health', href: '#' }
];

const Nav = () => (
  <div className="wrapper flex relative mb-5 navigation bg-heritage-blue w-full">
    <nav className="constrained flex mh-auto overflow-hidden height-10">
      {links.map(item => (
        <Link href={item.href}>
          <a className={aClasses}>{item.label}</a>
        </Link>
      ))}
    </nav>
  </div>
);

export default Nav;
