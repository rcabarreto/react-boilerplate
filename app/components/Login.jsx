import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleFormFieldChange = this.handleFormFieldChange.bind(this);
    this.handleLoginFormSubmit = this.handleLoginFormSubmit.bind(this);
  }

  handleFormFieldChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState( { [name]: value } );
  }

  handleLoginFormSubmit(e) {
    e.preventDefault();
    console.log('Make login call with user data. Email:', this.refs.email.value, 'Password:', this.refs.password.value);
  }

  render() {

    let { email, password } = this.state;

    return (
      <section className="h-100">
        <div className="container h-100">
          <div className="row justify-content-md-center h-100">
            <div className="card-wrapper">
              <div className="brand">
                <img src={require('../images/reactjsicon.png')} width="90" height="90"/>
              </div>
              <div className="card fat">
                <div className="card-body">
                  <h4 className="card-title">Login</h4>
                  <form method="POST" onSubmit={this.handleLoginFormSubmit}>

                    <div className="form-group">
                      <label htmlFor="email">E-Mail Address ({email})</label>
                      <input id="email" ref="email" type="email" className="form-control" name="email" onChange={this.handleChange} required autoFocus/>
                    </div>

                    <div className="form-group">
                      <label htmlFor="password">Password ({password})
                        <NavLink to="/forgotpassword" className="float-right">Forgot Password?</NavLink>
                      </label>
                      <input id="password" ref="password" type="password" className="form-control" name="password" onChange={this.handleChange} required data-eye/>
                    </div>

                    <div className="form-group">
                      <label>
                        <input type="checkbox" name="remember"/> Remember Me
                      </label>
                    </div>

                    <div className="form-group no-margin">
                      <button type="submit" className="btn btn-primary btn-block">
                        Login
                      </button>
                    </div>
                    <div className="margin-top20 text-center">
                      Don't have an account? <NavLink to="/">Create One</NavLink>
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


export default Login
