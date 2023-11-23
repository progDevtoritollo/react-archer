import { Navigate } from 'react-router-dom';
import { FC } from "react";

const PublicRoute: FC = () => {
  if (window.localStorage.getItem('isLoggedIn')) {
    return <Navigate to="/" replace />;
  } else return <> Hello user </>;
};

export default PublicRoute;