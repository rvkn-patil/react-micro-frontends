import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Devices from './componets/Devices'
import Orders from './componets/Orders'
import Products from './componets/Products'
// const MFE1_Button = React.lazy(
//   () => import('MFE1/Button')
// );

const MFE1_APP = React.lazy(() => import('MFE1/App-Mfe1'))

// const MFE1_Orders = React.lazy(
//   () => import('MFE1/Orders')
// );

// const MFE1_Products = React.lazy(
//   () => import('MFE1/Products')
// );
function App () {
  return (
    <div>
      <h1>Micro-Frontend Host</h1>

      <div
        style={{
          margin: '10px',
          padding: '10px',
          width: '60%',
          border: '4px solid black'
        }}
      >
        <h3>MFE1 Components Loaded in MFE2</h3>
        {/* <React.Suspense fallback='Loading Button'> */}
          <Router>
            <Link className='link' to='/devices'>Devices</Link>
            <Link className='link' to='/products'>Products</Link>
            <Link className='link' to='/orders'>Orders</Link>

            <Route path='/devices'>
              <Devices />
            </Route>
            <Route path='/products'>
              <Products />
            </Route>

            <Route path='/orders'>
              <Orders />
            </Route>
            {/* <Route path='/products'>
              <MFE1_Products />
            </Route>

            <Route path='/orders'>
              <MFE1_Orders />
            </Route> */}
          </Router>
          {/* <MFE1_APP name={'Products'} /> */}
        {/* </React.Suspense> */}
      </div>
    </div>
  )
}

export default App
