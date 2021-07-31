import React, { lazy, Suspense } from 'react';

const LazyTextBox = lazy(() => import('./TextBox'));

const TextBox = props => (
  <Suspense fallback={null}>
    <LazyTextBox {...props} />
  </Suspense>
);

export default TextBox;
