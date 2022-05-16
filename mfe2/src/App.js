import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Devices from './componets/Devices'
import Orders from './componets/Orders'
import Products from './componets/Products'
const MFE1_APP = React.lazy(() => import('MFE1/App-Mfe1'))

function App () {
  return (
    <div>
      {/* <h1>Micro-Frontend Host</h1> */}
      <div>
        <h1 className='mfe1-title'>Brio</h1>
        <div className='mfe1-nav'>
          <Link className='link' to='/devices'>Devices</Link>
          <Link className='link' to='/products'>Products</Link>
          <Link className='link' to='/orders'>Orders</Link>
        </div>
        <Router>
          <Route path='/devices'>
            <Devices />
          </Route>
          <Route path='/products'>
            <Products />
          </Route>
          <Route path='/orders'>
            <Orders />
          </Route>
        </Router>
      </div>
    </div>
  )
}

export default App
