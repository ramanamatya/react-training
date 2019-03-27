import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Your 1st app.';

ReactDOM.render(
  <h1>{title}</h1>,
  document.getElementById('app')
);

module.hot.accept();