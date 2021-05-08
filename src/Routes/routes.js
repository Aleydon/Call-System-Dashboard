/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const RoutesWrapper = ({ component: Component, isPrivate, ...rest }) => {
  const loading = false;
  const signed = true;

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
