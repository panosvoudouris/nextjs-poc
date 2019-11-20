import React from 'react';
import Head from 'next/head';
import Header from '../components/header';
import '../css/main.scss';

const Page = (props: { title: React.ReactNode; children: React.ReactNode }) => (
  <div>
    <Head>
      <title>Citizens Advice - {props.title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main className="constrained mh-auto ph-6">{props.children}</main>
  </div>
);

export default Page;
