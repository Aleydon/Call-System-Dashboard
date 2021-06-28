import React from 'react';
import { Switch } from 'react-router-dom';

import Customers from '../pages/Customers';
import Dashboard from '../pages/Dashboard';
import New from '../pages/New';
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
        <RoutesWrapper exact path="/register" component={SignUp} />
        <RoutesWrapper
          exact
          path="/customers"
          component={Customers}
          isPrivate
        />
        <RoutesWrapper exact path="/new" component={New} isPrivate />
      </Switch>
    </>
  );
};

export default Routes;
