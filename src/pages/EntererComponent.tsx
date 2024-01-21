import { Suspense, lazy, Fragment } from 'react'
// import { useSelector } from 'react-redux';

import PageLoader from '@/features/PageLoader'
const AuthRouter = lazy(() => import('@/app/router/AuthRouter'))
import AppRouter from '@/app/router/AppRouter'

const EntererComponent: React.FC = () => {
	// const { isLoggedIn } = useSelector(selectAuth);
	const isLoggedIn = window.localStorage.getItem('isLoggedIn')
	const isLoggedInBool = isLoggedIn === 'true'

	if (isLoggedInBool)
		return (
			<Fragment>
				<Suspense fallback={<PageLoader />}>
					<AppRouter />
				</Suspense>
			</Fragment>
		)
	else {
		return (
			<Fragment>
				<Suspense fallback={<PageLoader />}>
					<AuthRouter />
				</Suspense>
			</Fragment>
		)
	}
}

export default EntererComponent
