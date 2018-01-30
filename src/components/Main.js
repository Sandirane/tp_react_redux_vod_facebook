import React from 'react';
import Login from './Login';
import Home from './Home';
import Video from './Video';
import { Switch, Route } from 'react-router-dom';

//Lien de redirection

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/home' component={Home} />
      <Route path='/video' component={Video} />
    </Switch>
  </main>
);

export default Main;
