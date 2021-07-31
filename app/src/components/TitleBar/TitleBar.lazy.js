import React, { lazy, Suspense } from 'react';

const LazyTitleBar = lazy(() => import('./TitleBar'));

const TitleBar = props => (
  <Suspense fallback={null}>
    <LazyTitleBar {...props} />
  </Suspense>
);

export default TitleBar;
