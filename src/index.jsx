import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Navs from './components/Navs';

ReactDOM.render(
  <BrowserRouter>
    <Navs />
  </BrowserRouter>,
  document.getElementById('app'),
);
