import React from 'react';
import { withRouter, SingletonRouter } from 'next/router';
import { NextPageContext } from 'next';
import fetch from 'isomorphic-unfetch';
import ArticlePage from '../../src/templates/article';
import { IPageData } from '../../src/types';

type PageProps = {
  pageData: IPageData;
  router: SingletonRouter;
};

class Page extends React.Component<PageProps> {
  static async getInitialProps({ query }: NextPageContext) {
    const res = await fetch(
      `http://cms_headless_api.test:3000/benefits/${query.slug}`
    );
    const data = await res.json();

    return {
      pageData: data.data
    };
  }

  render() {
    // const { slug } = this.props.router.query;
    const { title, body, breadcrumbs } = this.props.pageData.attributes;
    const crumbs = {
      region: 'England',
      crumbs: breadcrumbs.map((item: any[]) => item[1])
    };

    return (
      <ArticlePage title={title} crumbs={crumbs}>
        <h1 className="h1">{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: body }}></div>
      </ArticlePage>
    );
  }
}

export default withRouter(Page);
