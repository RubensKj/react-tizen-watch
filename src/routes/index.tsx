import React from 'react';
import TizenRouter from './TizenRouter';
import { Switch, Route } from 'react-router-dom';

// Pages
import Main from '../pages/Main';
import Clock from '../pages/Clock';

const Routes: React.FC = () => {
  return (
    <TizenRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/clock" component={Clock} />
      </Switch>
    </TizenRouter>
  );
}

export default Routes;