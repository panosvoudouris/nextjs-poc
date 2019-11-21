import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';

import Breadcrumb from '../structure/breadcrumb';
import Footer from '../structure/footer';
import Header from '../structure/header';
import Nav from '../structure/nav';

const defaultLinks: any[] = [
  { label: 'Link 1', href: '#1' },
  { label: 'Link 2', href: '#2' },
  { label: 'Link 3', href: '#3' }
];

storiesOf('1 Structure', module).add('Breadcrumb', () => <Breadcrumb />);
storiesOf('1 Structure', module).add('Footer', () => <Footer />);
storiesOf('1 Structure', module).add('Header', () => <Header />);
storiesOf('1 Structure', module).add('Nav', () => (
  <Nav links={object('Links', defaultLinks)} />
));
storiesOf('1 Structure', module).add('Nav (no links)', () => <Nav />);
