import React from 'react';
import { NextPageContext } from 'next';
import fetch from 'isomorphic-unfetch';
import ArticlePage from '../src/templates/article';
import Tile from '../src/components/tile';

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
        const { attributes } = item;
        const { title, body, full_url } = attributes;
        return <Tile title={title} href={full_url} body={body} />;
      }
    );

    return (
      <ArticlePage title="Benefits">
        <h1 className="h1">{attributes.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: attributes.body }}></div>
        <h2 className="h2">Related items</h2>
        <div className="constrained mh-auto ph-6">
          <div className="flex flex-wrap gutter-ns">{relatedItems}</div>
        </div>
      </ArticlePage>
    );
  }
}

export default Benefits;
