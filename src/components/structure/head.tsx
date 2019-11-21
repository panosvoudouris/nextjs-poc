import React from 'react';
import Head from 'next/head';
import '../../../css/main.scss';

const PageHead = (props: { title: React.ReactNode }) => (
  <Head>
    <title>{props.title} - Citizens Advice</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default PageHead;
