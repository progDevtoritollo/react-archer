import { Navigate } from 'react-router-dom'
import { FC, Fragment } from 'react'

import { useSession } from '@/entities/session/hooks/use-session'

const PublicRoute: FC = () => {
	const { isLoggedIn } = useSession()

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
