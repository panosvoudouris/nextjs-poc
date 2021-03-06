import React from 'react';
import { NextPageContext } from 'next';
import fetch from 'isomorphic-unfetch';
import ArticlePage from '../src/templates/article';
import Tile from '../src/components/tile';
import { IPageData, IRelationships } from '../src/types';
import ErrorBoundary from '../src/components/errorBoundary';

interface IProps {
  pageData: IPageData;
  relationships: IRelationships;
  included: Array<IPageData>;
  crumbs: any;
}

class Benefits extends React.Component<IProps> {
  static async getInitialProps({ req }: NextPageContext) {
    const res = await fetch('http://cms_headless_api.test:3000/benefits');
    const data = await res.json();

    return {
      pageData: data.data as IPageData,
      relationships: data.data.relationships as IRelationships,
      included: data.included as Array<IPageData>
    };
  }

  render() {
    const { pageData, relationships, included } = this.props;
    const { attributes } = pageData;
    const crumbs = {
      region: 'England',
      crumbs: attributes.breadcrumbs.map((item: any[]) => item[1])
    };

    const childIds = relationships.children.data.map(item => item.id);
    const childPages = included.filter(item => {
      for (let i = 0; i < childIds.length; i++) {
        if (item.id === childIds[i]) {
          return true;
        }
      }

      return false;
    });

    const relatedItems = childPages.map((item, index: number) => {
      const { attributes } = item;
      const { title, body, full_url } = attributes;
      return (
        <Tile
          key={`tile-item-${index}`}
          title={title}
          href={full_url}
          body={body}
        />
      );
    });

    return (
      <ErrorBoundary>
        <ArticlePage title="Benefits" crumbs={crumbs}>
          <h1 className="h1">{attributes.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: attributes.body }}></div>
          <h2 className="h2">Related items</h2>
          <div className="constrained mh-auto ph-6">
            <div className="flex flex-wrap gutter-ns">{relatedItems}</div>
          </div>
        </ArticlePage>
      </ErrorBoundary>
    );
  }
}

export default Benefits;
