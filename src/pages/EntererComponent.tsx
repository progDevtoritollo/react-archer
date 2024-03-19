import { Suspense, lazy, Fragment } from 'react'
import { useSelector } from 'react-redux'

import PageLoader from '@/features/PageLoader'
const AuthRouter = lazy(() => import('@/app/router/AuthRouter'))
import AppRouter from '@/app/router/AppRouter'
import type { RootState } from '@/app/store'

const EntererComponent: React.FC = () => {
	const isLoggedIn = useSelector((state: RootState) => state.session.isLoggedIn)

	if (isLoggedIn)
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
