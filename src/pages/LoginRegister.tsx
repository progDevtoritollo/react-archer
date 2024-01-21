import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { Suspense, Fragment } from 'react'

import PageLoader from '@/features/PageLoader'

export const LoginRegister: FC = () => {
	//! request for auth data and set data to localStorage & sessionStorage
	// console.log(window.localStorage.getItem('isLoggedIn'), 'LoginRegister page')

	const isLoggedIn = window.localStorage.getItem('isLoggedIn')
	const isLoggedInBool = isLoggedIn === 'true'

	if (isLoggedInBool) {
		return (
			<Fragment>
				<Navigate to="/" replace />
			</Fragment>
		)
	} else
		return (
			<Fragment>
				<Suspense fallback={<PageLoader />}>
					<div>Sign in or Sign up Block </div>
				</Suspense>
			</Fragment>
		)
}
