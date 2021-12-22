import React, { lazy, Suspense } from 'react';

const LazyCookies = lazy(() => import('./Cookies'));

const Cookies = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCookies {...props} />
  </Suspense>
);

export default Cookies;
