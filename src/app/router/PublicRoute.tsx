import { Navigate } from 'react-router-dom'
import { FC, Fragment } from 'react'

const PublicRoute: FC = () => {
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
				<Navigate to="/auth/signin" replace />
			</Fragment>
		)
}

export default PublicRoute
