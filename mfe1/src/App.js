import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import "./App.css";
// import Button from './Button'
import Orders from './components/Orders'
import Products from './components/Products'

function App ({ name }) {
  console.log('NAME IN MFE::', name)
  return (
    <div>
      <h1>MFE1</h1>
      <Router>
        <Link to='/products'>Products</Link>
        <Link to='/orders'>Orders</Link>

        <Route path='/orders'>
          <Orders />
        </Route>
        <Route path='/products'>
          <Products />
        </Route>
      </Router>
    </div>
  )
}

export default App
