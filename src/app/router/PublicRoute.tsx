import { Navigate } from 'react-router-dom'
import { FC, Fragment } from 'react'
import { useSelector } from 'react-redux'

import type { RootState } from '@/app/store'

const PublicRoute: FC = () => {
	const isLoggedIn = useSelector((state: RootState) => state.session.isLoggedIn)

	if (isLoggedIn) {
		return (
			<Fragment>
				<Navigate to="/" replace />
			</Fragment>
		)
	} else
		return (
			<Fragment>
				<Navigate to="/auth/signin" replace />
			</Fragment>
		)
}

export default PublicRoute
