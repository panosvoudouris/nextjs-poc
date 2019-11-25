import React from 'react';

export type BreadcrumbProps = {
  region: string;
  crumbs: string[];
};

const Breadcrumb = (props: { crumbs: BreadcrumbProps }) => (
  <div aria-label="You are at:" className="constrained mh-auto ph-6">
    <div className="trail mb-4">
      <button className="button-tertiary bg-white hover-bg-blue-mid">
        {props.crumbs.region}
      </button>
      {props.crumbs.crumbs &&
        props.crumbs.crumbs.map((item: string) => (
          <span className="trail-item" key={`breadcrumb-${item}`}>
            {item}
          </span>
        ))}
    </div>
  </div>
);

export default Breadcrumb;
