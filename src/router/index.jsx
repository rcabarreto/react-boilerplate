import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'

import Login from '../components/Login'
import Register from '../components/Register'
import ForgotPassword from '../components/ForgotPassword'

const App = () => {
  return (
    <div>
      <h1>Hello app!</h1>
      <NavLink to="/login">Login</NavLink><br/>
      <NavLink to="/forgotpassword">Forgot Password?</NavLink><br/>
      <NavLink to="/register">Register</NavLink>
    </div>
  )
};

export default (
  <Router>
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/forgotpassword" component={ForgotPassword}/>
      <Route path="/register" component={Register}/>
      <Route path="/" component={App}/>
    </Switch>
  </Router>
);
