import React from 'react';
import Head from '../components/structure/head';
import Header from '../components/structure/header';
import Footer from '../components/structure/footer';

const ArticlePage = (props: {
  title: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div>
    <Head title={props.title} />

    <Header />

    <main className="constrained mh-auto ph-6">{props.children}</main>

    <Footer />
  </div>
);

export default ArticlePage;
