import React, { lazy, Suspense } from 'react';

const LazyTitle = lazy(() => import('./Title'));

const Title = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTitle {...props} />
  </Suspense>
);

export default Title;
