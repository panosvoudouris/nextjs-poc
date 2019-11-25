import React from 'react';
import Head from '../components/structure/head';
import Header from '../components/structure/header';
import Footer from '../components/structure/footer';

interface IProps {
  title: string;
  children: React.ReactNode;
}

const Page = (props: IProps) => (
  <div>
    <Head title={props.title} />

    <Header />

    <main className="constrained mh-auto ph-6">{props.children}</main>

    <Footer />
  </div>
);

export default Page;
