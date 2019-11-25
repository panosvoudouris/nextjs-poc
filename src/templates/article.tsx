import React from 'react';
import Head from '../components/structure/head';
import Header from '../components/structure/header';
import Footer from '../components/structure/footer';
import Breadcrumb, {
  BreadcrumbProps
} from '../components/structure/breadcrumb';

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
