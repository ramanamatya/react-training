import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import Comment from './Comment';
import SuperHeroList from './SuperHeroList';
import HooksExample from './HooksExample';

export default function () {
  return (
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/comment" component={Comment} />
      <Route path="/superhero" component={SuperHeroList} />
      <Route path="/hooks" component={HooksExample} />
    </Switch>
  );
}
