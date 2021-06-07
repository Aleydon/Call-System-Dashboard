import React from 'react';
import { Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import RoutesWrapper from './routes';

const Routes = () => {
  return (
    <>
      <Switch>
        <RoutesWrapper exact path="/" component={SignIn} />
        <RoutesWrapper
          exact
          path="/dashboard"
          component={Dashboard}
          isPrivate
        />
        <RoutesWrapper exact path="/profile" component={Profile} isPrivate />
        <RoutesWrapper exact path="/register" component={SignUp} isPrivate />
      </Switch>
    </>
  );
};

export default Routes;
