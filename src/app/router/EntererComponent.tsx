import { Suspense, Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useQuery } from '@tanstack/react-query'

import PageLoader from '@/features/PageLoader'
import AuthRouter from '@/app/router/AuthRouter'
import AppRouter from '@/app/router/AppRouter'
import type { RootState } from '@/app/store'

import { SetLoggedIn } from '@/entities/session/model/slice'

import { getAuthCheck } from '@/entities/session/api/get-is-auth'

const EntererComponent: React.FC = () => {
	const isLoggedIn = useSelector((state: RootState) => state.session.isLoggedIn)
	const dispatch = useDispatch()

	const { isError, isPending, isSuccess } = useQuery({
		queryKey: ['getAuthCheck'],
		queryFn: getAuthCheck,
	})

	useEffect(() => {
		if (isSuccess) {
			dispatch(SetLoggedIn(true))
		}
		if (isError) {
			dispatch(SetLoggedIn(false))
		}
	}, [isSuccess, isError, dispatch])

	if (isPending) {
		return <PageLoader />
	}
	return (
		<Fragment>
			<Suspense fallback={<PageLoader />}>{isLoggedIn ? <AppRouter /> : <AuthRouter />}</Suspense>
		</Fragment>
	)
}

export default EntererComponent
