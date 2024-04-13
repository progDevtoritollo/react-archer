import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { Suspense, Fragment } from 'react'
import { Box } from '@mui/material'

import PageLoader from '@/widgets/PageLoader'
import AuthBlock from './auth-block/ui'
import { useSession } from '@/entities/session/hooks/use-session'

export const LoginRegister: FC = () => {
	//! request for auth data and set data to Redux && HTTPOnly
	const isLoggedIn = useSession()

	if (isLoggedIn) {
		return (
			<Fragment>
				<Navigate to="/" replace />
			</Fragment>
		)
	} else
		return (
			<Fragment>
				<Suspense fallback={<PageLoader />}>
					<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<AuthBlock />
					</Box>
				</Suspense>
			</Fragment>
		)
}
