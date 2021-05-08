import React from 'react';
import { Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import RoutesWrapper from './routes';

const Routes = () => {
  return (
    <>
      <Switch>
        <RoutesWrapper exact path="/" component={SignIn} />
        <RoutesWrapper path="/register" component={SignUp} />
        <RoutesWrapper path="/dashboard" component={Dashboard} isPrivate />
      </Switch>
    </>
  );
};

export default Routes;
