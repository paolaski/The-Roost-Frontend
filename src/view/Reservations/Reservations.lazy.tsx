import React, { lazy, Suspense } from 'react';

const LazyReservations = lazy(() => import('./Reservations'));

const Reservations = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyReservations {...props} />
  </Suspense>
);

export default Reservations;
