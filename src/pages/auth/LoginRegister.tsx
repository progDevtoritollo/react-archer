import { FC } from 'react'
import { Suspense, Fragment } from 'react'
import { Box } from '@mui/material'

import PageLoader from '@/widgets/PageLoader'
import AuthBlock from './auth-block/ui'

export const LoginRegister: FC = () => {
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
