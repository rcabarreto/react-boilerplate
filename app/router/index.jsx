import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from '../components/Login'
import Register from '../components/Register'
import ForgotPassword from '../components/ForgotPassword'


export default (
  <Router>
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/forgotpassword" component={ForgotPassword}/>
      <Route path="/" component={Register}/>
    </Switch>
  </Router>
);
