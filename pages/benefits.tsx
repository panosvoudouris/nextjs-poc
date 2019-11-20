import React from 'react';
import { NextPageContext } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import Header from '../components/header';

type BenefitsProps = {
  pageData: any;
  relationships: any;
  included: any;
};

class Benefits extends React.Component<BenefitsProps> {
  static async getInitialProps({ req }: NextPageContext) {
    const res = await fetch('http://cms_headless_api.test:3000/benefits', {
      method: 'GET',
      mode: 'cors',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    return {
      pageData: data.data,
      relationships: data.data.relationships,
      included: data.included
    };
  }

  render() {
    const { pageData, relationships, included } = this.props;
    const { attributes } = pageData;

    const childIds = relationships.children.data.map(
      (item: { id: string; type: string }) => item.id
    );
    const childPages = included.filter((item: { id: any }) => {
      for (let i = 0; i < childIds.length; i++) {
        if (item.id === childIds[i]) {
          return true;
        }
      }

      return false;
    });

    const relatedItems = childPages.map(
      (item: { id: any; attributes: any }) => {
        const { id, attributes } = item;
        return (
          <li key={id}>
            <Link href={attributes.full_url}>
              <a>{attributes.title}</a>
            </Link>
          </li>
        );
      }
    );

    return (
      <div>
        <Head>
          <title>Citizens Advice - Benefits</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <main className="constrained mh-auto ph-6">
          <h1 className="h1">{attributes.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: attributes.body }}></div>
          <h2 className="h2">Related items</h2>
          <ul>{relatedItems}</ul>
        </main>
      </div>
    );
  }
}

export default Benefits;
