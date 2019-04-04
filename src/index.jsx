import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navs from './components/Navs';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Navs />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
