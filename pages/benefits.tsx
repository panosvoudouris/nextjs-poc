import React from 'react';
import { NextPage } from 'next';
import fetch from 'isomorphic-unfetch';
import Nav from '../components/nav/nav';

import '../css/main.css';

type BenefitsProps = {
  data: any;
};

const Benefits: NextPage<BenefitsProps> = ({ data }) => (
  <div>
    <Nav />
    <b>Benefits</b>
    <p>The page id is: {data.data.id}</p>
  </div>
);

Benefits.getInitialProps = async function() {
  const res = await fetch('http://cms_headless_api.test:3000/benefits', {
    method: 'GET',
    mode: 'cors',
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await res.json();
  console.log(`Show data fetched: ${data.data.id}`);

  return {
    data: data
  };
};

export default Benefits;
