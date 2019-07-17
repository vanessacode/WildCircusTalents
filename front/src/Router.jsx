import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Inscriptions from './components/inscriptions/Inscriptions';
import WildTeam from './components/WildTeam';

// Routes to add if i create a Home Page:

// <Route exact path="/" component={Home} />
// <Route path="/inscriptions" component={inscriptions} />

export default function Routeur() {
  return (
    <Switch>
      <Route path="/" component={Inscriptions} />
      <Route path="/wild-circus-members" component={WildTeam} />
    </Switch>
  );
}
