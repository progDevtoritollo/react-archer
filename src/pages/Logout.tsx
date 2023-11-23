import { useEffect, FC } from 'react';
import { useNavigate } from 'react-router-dom';
// import { logout as logoutAction } from '@/redux/auth/actions';
import PageLoader from '@/features/PageLoader';

const Logout: FC = () => {
  const navigate = useNavigate();
  // function asyncLogout() {
  //   dispatch(logoutAction());
  // }
  useEffect(() => {
    // asyncLogout();
    window.localStorage.removeItem('isLoggedIn');
    window.localStorage.removeItem('auth');
    navigate('/login');
  }, []);

  return <PageLoader />;
};
export default Logout;
