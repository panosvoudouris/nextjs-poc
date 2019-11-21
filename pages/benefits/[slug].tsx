import React from 'react';
import { withRouter, SingletonRouter } from 'next/router';
import { NextPageContext } from 'next';
import fetch from 'isomorphic-unfetch';
import ArticlePage from '../../src/templates/article';

type PageProps = {
  pageData: any;
  router: SingletonRouter;
};

class Page extends React.Component<PageProps> {
  static async getInitialProps({ query }: NextPageContext) {
    const res = await fetch(
      `http://cms_headless_api.test:3000/benefits/${query.slug}`,
      {
        method: 'GET',
        mode: 'cors',
        credentials: 'omit',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    const data = await res.json();

    return {
      pageData: data.data
    };
  }

  render() {
    // const { slug } = this.props.router.query;
    const { title, body } = this.props.pageData.attributes;

    return (
      <ArticlePage title={title}>
        <h1 className="h1">{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: body }}></div>
      </ArticlePage>
    );
  }
}

export default withRouter(Page);
