import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import HomePage from './pages/homepage/home.page';
import * as NotFoundImage from './images/404.jpg';

import './App.scss';

const RingsPage = () => (
  <div>
    <h1>RINGS PAGE</h1>
  </div>
);

const NotFoundPage = () => (
  <div style={{textAlign: 'center'}}>
    <img style={{
      margin: '0 auto',
      maxWidth: 'auto',
      height: '400px'
    }} src={NotFoundImage} />
    <br/>
    <Link to='/'>Home</Link>
  </div>
);

function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={HomePage}/> 
      <Route path='/rings' component={RingsPage}/> 
      <Route path='*' component={NotFoundPage}/> 
    </Switch>
    </div>
  );
}

export default App;
