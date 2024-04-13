import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { Suspense, Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Box } from '@mui/material'

import PageLoader from '@/widgets/PageLoader'
import AuthBlock from './auth-block/ui'
import type { RootState } from '@/app/store'

export const LoginRegister: FC = () => {
	//! request for auth data and set data to Redux && HTTPOnly
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
				<Suspense fallback={<PageLoader />}>
					<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<AuthBlock />
					</Box>
				</Suspense>
			</Fragment>
		)
}
