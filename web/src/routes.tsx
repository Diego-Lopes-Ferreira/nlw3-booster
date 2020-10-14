import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Components
import Landing from './pages/Landing';
import OrphanateMap from './pages/OrphanateMap';
import CreateOrphanage from './pages/CreateOrphanage';
import Orphanage from './pages/Orphanage';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/map" exact component={OrphanateMap} />
        <Route path="/orphanage/create" exact component={CreateOrphanage} />
        <Route path="/orphanages/:id" exact component={Orphanage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;