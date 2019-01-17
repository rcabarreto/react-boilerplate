import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


class ForgotPassword extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="h-100">
        <div className="container h-100">
          <div className="row justify-content-md-center align-items-center h-100">
            <div className="card-wrapper">
              <div className="brand">
                <img src={require('../images/reactjsicon.png')} width="90" height="90"/>
              </div>
              <div className="card fat">
                <div className="card-body">
                  <h4 className="card-title">Forgot Password</h4>
                  <form method="POST">

                    <div className="form-group">
                      <label htmlFor="email">E-Mail Address</label>
                      <input id="email" type="email" className="form-control" name="email" value="" required autoFocus/>
                        <div className="form-text text-muted">
                          By clicking "Reset Password" we will send a password reset link
                        </div>
                    </div>

                    <div className="form-group no-margin">
                      <button type="submit" className="btn btn-primary btn-block">
                        Reset Password
                      </button>
                    </div>
                    <div className="margin-top20 text-center">
                      Already have an account? <NavLink to="/login">Login</NavLink>
                    </div>
                  </form>
                </div>
              </div>
              <div className="footer">
                Copyright &copy; 2017 &mdash; Your Company
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


export default ForgotPassword
