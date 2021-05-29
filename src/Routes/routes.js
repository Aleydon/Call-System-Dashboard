/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../contexts/Auth';

const RoutesWrapper = ({ component: Component, isPrivate, ...rest }) => {
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return <div />;
  }

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default RoutesWrapper;
