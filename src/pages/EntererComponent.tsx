import { Suspense, Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import PageLoader from '@/features/PageLoader'
import AuthRouter from '@/app/router/AuthRouter'
import AppRouter from '@/app/router/AppRouter'
import type { RootState } from '@/app/store'

import { SetLoggedIn } from '@/entities/session/model/slice'
import { URL_GET_IS_AUTH } from '@/app/config/config_API'

const getAuthCheck = async () => {
	const response = await axios.get(URL_GET_IS_AUTH, {
		withCredentials: true,
		headers: {
			'Content-Type': 'application/json',
		},
	})
	return response.data
}

const EntererComponent: React.FC = () => {
	const isLoggedIn = useSelector((state: RootState) => state.session.isLoggedIn)
	const dispatch = useDispatch()

	const { isError, isPending, isSuccess } = useQuery({
		queryKey: ['getHello'],
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
