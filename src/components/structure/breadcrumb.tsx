import React from 'react';

const Breadcrumb = () => (
  <div aria-label="You are at:" className="constrained mh-auto ph-6">
    <div className="trail mb-4">
      <button className="button-tertiary bg-white hover-bg-blue-mid">
        England
      </button>
      <span className="trail-item">Benefits</span>
    </div>
  </div>
);

export default Breadcrumb;
