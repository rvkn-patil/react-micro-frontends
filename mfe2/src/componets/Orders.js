import React from 'react';

const MFE1_ORDERS = React.lazy(
    () => import('MFE1/Orders')
  );

const Orders = () => {
  return (
    <div>
        <React.Suspense fallback='Loading Orders'>
          <MFE1_ORDERS />
        </React.Suspense>
    </div>
  )
}

export default Orders
