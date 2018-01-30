import React from 'react';
import NewReleases from './NewReleases';
import TopPicks from './TopPicks';
import PreOrder from './PreOrder';
import LastChance from './LastChance';
import { Switch, Route } from 'react-router-dom';

//création des sous catégories

const Main = () => (
  <Switch>
    <Route exact path='/home' component={NewReleases} />
    <Route exact path='/home/top-picks' component={TopPicks} />
    <Route exact path='/home/pre-order' component={PreOrder} />
    <Route exact path='/home/last-chance' component={LastChance} />
  </Switch>
);

export default Main;
