// import React, { ComponentType } from 'react';
// import { Route, useNavigate } from 'react-router-dom';
// import { useAuth } from 'hooks/useAuth';

// interface IPrivateRouteProps {
//   path: string;
//   component: any;
// }

// export const PrivateRoute: React.FC<IPrivateRouteProps> = ({ component: Component, ...rest }) => {
//   const { authenticated } = useAuth();
//   const navigate = useNavigate();

//   if (!authenticated) {
//     navigate("/not-auth");
//   }

//   return (
//     <Route {...rest}>
//       {authenticated ? <Component /> : null}
//     </Route>
//   );
// };
