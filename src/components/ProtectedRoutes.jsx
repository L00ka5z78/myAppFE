import React from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoutes = ({ loggedIn, children }) => {
  if (!loggedIn) {
    return <Navigate to="/user/login" replace />;
  }
  return children;
};
