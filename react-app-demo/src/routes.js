import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import User from './pages/User/User';
import Repo from './pages/Repo/Repo';

// You can add layout components like <Header /> or <Footer /> here.
export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:user" component={User} />
      <Route path="/:user/:repo" component={Repo} />
    </Switch>
  );
};
