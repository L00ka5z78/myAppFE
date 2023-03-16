// import * as React from 'react';
// import { Navigate } from 'react-router-dom';

// interface Props {
//   loggedIn: any;
//   children: any;
// }

// export const NotProtectedRoutes = ({ loggedIn, children }: Props) => {
//   if (loggedIn) {
//     return <Navigate to="/" replace />;
//   }
//   return children;
// };

import { Navigate } from 'react-router-dom';

interface Props {
  loggedIn: boolean;
  children: any;
}

export const NotProtectedRoutes = ({ loggedIn, children }: Props) => {
  if (loggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};
