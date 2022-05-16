import React from 'react'

const Products = ({userObject, revertUser}) => {
  console.log("USER OBJECT::", userObject);
  const newUser = {
    name: "Harish",
    email: "harish@gmail.com"
  }
  return (
    <div>
      <h1 className='mfe1-title'>Products Components</h1>
      <div className='product-content'>
        <h3 className='mfe1-textStyle'>{userObject && userObject.name ? userObject.name : 'NA' }</h3>
        <h4 className='mfe1-textStyle'>{userObject && userObject.email ? userObject.email : 'NA' }</h4>
        <button className='get-userData' onClick={() => {revertUser(newUser)}}>Get User Data</button>
      </div>
    </div>
  )
}

export default Products;
