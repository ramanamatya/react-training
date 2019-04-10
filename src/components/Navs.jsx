import React from 'react';
import { NavLink } from 'react-router-dom';

import Router from './router';

const NavBars = () => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <NavLink to="/" className="nav-link" exact activeClassName="active">Active</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/comment" className="nav-link">Comment</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/superhero" className="nav-link">Superhero</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/hooks" className="nav-link">Hooks</NavLink>
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
