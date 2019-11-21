import React from 'react';
import Head from '../components/structure/head';
import Header from '../components/structure/header';
import Footer from '../components/structure/footer';
import Breadcrumb from '../components/structure/breadcrumb';

const ArticlePage = (props: { title: string; children: React.ReactNode }) => (
  <div>
    <Head title={props.title} />

    <Header />

    <Breadcrumb />

    <main className="constrained mh-auto ph-6">
      Article template xyz
      {props.children}
    </main>

    <Footer />
  </div>
);

export default ArticlePage;
