/* eslint-disable react/button-has-type */
import React, { useContext } from 'react';

import { AuthContext } from '../../contexts/Auth';

function Dashboard() {
  const { signOut } = useContext(AuthContext);

  function signOutAplicattion() {
    signOut();
  }
  return (
    <>
      <h3>Dashboard</h3>
      <button onClick={signOutAplicattion}>Sign Out</button>
    </>
  );
}

export default Dashboard;
