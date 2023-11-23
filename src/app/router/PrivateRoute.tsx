import { Navigate } from 'react-router-dom';
import { FC, ReactNode } from 'react';

const PrivateRoute: FC<{ children: ReactNode }> = ({ children }) => {
      if (window.localStorage.getItem('isLoggedIn')) {
            return <>{children}</>;
      } else
            return (
                  <Navigate
                        to="/login"
                        replace
                  />
            );
};

export default PrivateRoute;
