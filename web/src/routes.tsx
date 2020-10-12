import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Components
import Landing from './pages/Landing';
import OrphanateMap from './pages/OrphanateMap';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/map" exact component={OrphanateMap} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;