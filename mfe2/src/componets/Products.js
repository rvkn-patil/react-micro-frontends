import React, {useState} from 'react'
const MFE1_PRODUCTS = React.lazy(() => import('MFE1/Products'))

const Products = () => {
  const [userObject, setUserObject] = useState({
    name: "Ravikiran",
    email: "ravikiran@gmail.com"
  });

  const revertUser = (newUser) => {
    console.log("NEW USER::", newUser);
  }

  return (
    <div>
      {/* <ErrorBoundary> */}
      <React.Suspense fallback='Loading Products'>
        <MFE1_PRODUCTS userObject={userObject} revertUser={revertUser} />
      </React.Suspense>
      {/* </ErrorBoundary> */}
    </div>
  )
}

export default Products
