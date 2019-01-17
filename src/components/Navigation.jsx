import React from 'react'
import { NavLink } from 'react-router-dom'
import { List } from 'react-feather'

const Navigation = () => (
  <React.Fragment>
    <NavLink to="/" className="nav-link" activeClassName="active">
      <List className="feather" /> Home
    </NavLink>
    <NavLink to="/example" className="nav-link" activeClassName="active">
      <List className="feather" /> Example
    </NavLink>
  </React.Fragment>
)

export default Navigation
