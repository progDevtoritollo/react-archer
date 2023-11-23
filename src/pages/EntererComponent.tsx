import { Suspense, lazy } from 'react';
// import { useSelector } from 'react-redux';

import PageLoader from '@/features/PageLoader';
const AuthRouter = lazy(() =>
      import('@/app/router/AuthRouter'),
);
import AppRouter from '@/app/router/AppRouter';



const EntererComponent: React.FC = () => {
      // const { isLoggedIn } = useSelector(selectAuth);
      const isLoggedIn = window.localStorage.getItem('isLoggedIn');

      if (!isLoggedIn)
            return (
                  <div>
                        <Suspense fallback={<PageLoader />}>
                              <AuthRouter />
                        </Suspense>
                  </div>
            );
      else {
            return (
                  <div>
                        <Suspense
                              fallback={
                                    <PageLoader />
                              }>
                              <AppRouter />
                        </Suspense>
                  </div>
            );
      }
};

export default EntererComponent;
