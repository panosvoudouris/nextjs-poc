import React from 'react';
import Link from 'next/link';

type TileProps = {
  title: string;
  href: string;
  body: string;
};

const Tile = (props: TileProps) => (
  <div className="flex w-full w-half-m w-third-ns ph-2-ns mb-4">
    <div className="ba b-light-grey w-full p-4 b-radius-2">
      <h2 className="h2 mt-0">
        <Link href={props.href}>
          <a>{props.title}</a>
        </Link>
      </h2>
      <div dangerouslySetInnerHTML={{ __html: props.body }} />
    </div>
  </div>
);

export default Tile;
