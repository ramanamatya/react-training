import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import NameLabel from './NameLabel';

export default function () {
  return (
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/active1" component={NameLabel} />
      <Route path="/active2" component={App} />
      <Route path="/active3" component={App} />
    </Switch>
  );
}