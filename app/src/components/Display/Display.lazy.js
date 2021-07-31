import React, { lazy, Suspense } from 'react';

const LazyDisplay = lazy(() => import('./Display'));

const Display = props => (
  <Suspense fallback={null}>
    <LazyDisplay {...props} />
  </Suspense>
);

export default Display;
