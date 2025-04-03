import React, { Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const SplineSetUp = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/6w5DjjSbKqoI53zj/scene.splinecode" />
    </Suspense>
  );
};

export default SplineSetUp;
