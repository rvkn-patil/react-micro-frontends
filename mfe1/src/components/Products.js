import React from 'react'

const Products = ({userObject, revertUser}) => {
  console.log("USER OBJECT::", userObject);
  const newUser = {
    name: "Harish",
    email: "harish@gmail.com"
  }
  return (
    <div>
      <h1>Products Components</h1>
      <h3>{userObject && userObject.name ? userObject.name : 'NA' }</h3>
      <h4>{userObject && userObject.email ? userObject.email : 'NA' }</h4>
      <button onClick={() => {revertUser(newUser)}}>Revert New User</button>
    </div>
  )
}

export default Products;
