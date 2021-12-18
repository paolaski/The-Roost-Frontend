import React, { lazy, Suspense } from 'react';

const LazyLanguageSelector = lazy(() => import('./LanguageSelector'));

const LanguageSelector = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLanguageSelector {...props} />
  </Suspense>
);

export default LanguageSelector;
