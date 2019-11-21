import React from 'react';
import { storiesOf } from '@storybook/react';

import Breadcrumb from '../src/components/structure/breadcrumb';
import Footer from '../src/components/structure/footer';
import Header from '../src/components/structure/header';
import Nav from '../src/components/structure/nav';

storiesOf('1 Structure', module).add('Breadcrumb', () => <Breadcrumb />);
storiesOf('1 Structure', module).add('Footer', () => <Footer />);
storiesOf('1 Structure', module).add('Header', () => <Header />);
storiesOf('1 Structure', module).add('Nav', () => <Nav />);
