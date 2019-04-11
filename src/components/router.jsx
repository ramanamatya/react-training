import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import Comment from './Comment';
import SuperHeroList from './SuperHeroList';
import Hooks1 from './Hooks1';
import Hooks2 from './Hooks2'

export default function () {
  return (
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/comment" component={Comment} />
      <Route path="/superhero" component={SuperHeroList} />
      <Route path="/usestate" component={Hooks1} />
      <Route path="/useeffect" component={Hooks2} />
    </Switch>
  );
}
