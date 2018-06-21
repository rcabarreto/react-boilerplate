import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import * as api from 'api'

import { loginSuccess } from 'actions'

class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
    };

    this.handleFormFieldChange = this.handleFormFieldChange.bind(this);
    this.handleRegisterFormSubmit = this.handleRegisterFormSubmit.bind(this);
  }

  handleFormFieldChange(e) {

    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState( { [name]: value } );
  }

  handleRegisterFormSubmit(e) {
    e.preventDefault();

    let { dispatch } = this.props;

    let userData = this.state;

    console.log(JSON.stringify(userData));

    api.registerUser(userData).then(response => {
      console.log(response);
      dispatch(loginSuccess(response));
    }).catch(err => {
      console.log(err);
    });


    this.refs.name.value = '';
    this.refs.email.value = '';
    this.refs.password.value = '';

    console.log('enviando formulario...');

  }

  render() {

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
                  <h4 className="card-title">Register</h4>
                  <form method="post" onSubmit={this.handleRegisterFormSubmit}>

                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input id="name" ref="name" type="text" className="form-control" name="name" onChange={this.handleFormFieldChange} required autoFocus/>
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">E-Mail Address</label>
                      <input id="email" ref="email" type="email" className="form-control" name="email" onChange={this.handleFormFieldChange} required/>
                    </div>

                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input id="password" ref="password" type="password" className="form-control" name="password" onChange={this.handleFormFieldChange} required data-eye/>
                    </div>

                    <div className="form-group">
                      <label>
                        <input type="checkbox" name="aggree" value="1"/> I agree to the Terms and Conditions
                      </label>
                    </div>

                    <div className="form-group no-margin">
                      <button type="submit" className="btn btn-primary btn-block">
                        Register
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

export default connect()(Register);
