import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';

import Breadcrumb, {
  BreadcrumbProps
} from '../structure/breadcrumb/breadcrumb';
import Footer from '../structure/footer/footer';
import Header from '../structure/header/header';
import Nav from '../structure/nav/nav';

const defaultLinks: any[] = [
  { label: 'Link 1', href: '#1' },
  { label: 'Link 2', href: '#2' },
  { label: 'Link 3', href: '#3' }
];

const crumbs: BreadcrumbProps = {
  region: 'England',
  crumbs: ['page 1', 'page 2']
};

storiesOf('1 Structure', module).add('Breadcrumb', () => (
  <Breadcrumb crumbs={crumbs} />
));
storiesOf('1 Structure', module).add('Footer', () => <Footer />);
storiesOf('1 Structure', module).add('Header', () => <Header />);
storiesOf('1 Structure', module).add('Nav', () => (
  <Nav links={object('Links', defaultLinks)} />
));
storiesOf('1 Structure', module).add('Nav (no links)', () => <Nav />);
