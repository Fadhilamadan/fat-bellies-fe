import React from 'react';

import { countLoader } from '../../../utils/func/array';

import ContentLoader from 'react-content-loader';

const BranchCardLoader = (props) => {
  return countLoader(props.count).map((item) => {
    return (
      <div key={item} className="bg-white p-6 rounded-lg shadow-lg">
        <ContentLoader
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          height={120}
          speed={2}
          viewBox="0 0 400 120"
          width={400}
          {...props}
        >
          <rect height="20" rx="3" ry="3" width="150" x="0" y="0" />
          <rect height="40" rx="3" ry="3" width="350" x="0" y="25" />
          <rect height="20" rx="3" ry="3" width="80" x="0" y="100" />
        </ContentLoader>
      </div>
    );
  });
};

export default BranchCardLoader;
