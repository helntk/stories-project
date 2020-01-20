import React from 'react';
import './App.scss';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import {Switch, Route} from 'react-router-dom';
import PrivateRoute from './utils/privateRoute';

function App() {
  return (
    <div className="App">
      <Switch>

        <Route exact path='/' component={LoginPage} />
        <PrivateRoute exact path='/home' component={HomePage} />


      </Switch>

    </div>
  );
}

export default App;
