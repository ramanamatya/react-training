import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navs from './components/Navs';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Navs />
    </HashRouter>
  </Provider>,
  document.getElementById('app'),
);
