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
      <h1 className='mfe1-title'>Third Party Project (Orders , Finance)</h1>
      <div className='mfe1-nav'>
        <Link to='/products'>Products</Link>
        <Link to='/orders'>Orders</Link>
      </div>
      <Router>
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
