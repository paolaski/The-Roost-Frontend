import React, { lazy, Suspense } from 'react';

const LazyLegal = lazy(() => import('./Legal'));

const Legal = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLegal {...props} />
  </Suspense>
);

export default Legal;
