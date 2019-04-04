import React from 'react';
import { NavLink } from 'react-router-dom';

import Router from './router';

const NavBars = () => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <NavLink to="/" className="nav-link" exact activeClassName="active">Active</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/active1" className="nav-link">Active1</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/active2" className="nav-link">Active2</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/active3" className="nav-link">Active3</NavLink>
    </li>
  </ul>
);

const Navs = () => (
  <div className="header">
    <NavBars />
    <div className="body">
      <Router />
    </div>
  </div>
);

export default Navs;
