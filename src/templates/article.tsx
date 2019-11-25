import React from 'react';
import Head from '../components/structure/head/head';
import Header from '../components/structure/header/header';
import Footer from '../components/structure/footer/footer';
import Breadcrumb, {
  BreadcrumbProps
} from '../components/structure/breadcrumb/breadcrumb';

const ArticlePage = (props: {
  title: string;
  crumbs: BreadcrumbProps;
  children: React.ReactNode;
}) => (
  <div>
    <Head title={props.title} />

    <Header />

    <Breadcrumb crumbs={props.crumbs} />

    <main className="constrained mh-auto ph-6">{props.children}</main>

    <Footer />
  </div>
);

export default ArticlePage;
