import { Box, Paper, Typography } from '@mui/material'
import { FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { GoogleAuthButton } from '@/shared/ui/buttons/google-auth-button'
import { AppleAuthButton } from '@/shared/ui/buttons/apple-auth-button'
import PageLoader from '@/features/PageLoader'

import { getGoogleURL } from '@/entities/session/api/get-google-auth-url'

const AuthBlock: FC = () => {
	const { data: url, isPending, isError } = useQuery({ queryKey: ['url'], queryFn: getGoogleURL })

	const handleAuthGoogle = () => {
		if (url) {
			window.location.href = url
		} else {
			toast.error('Failed to access services')
		}
	}

	if (isPending) return <PageLoader />
	if (isError) return <div>Error</div>

	return (
		<Paper
			sx={{
				width: '500px',
				height: '400px',
				borderRadius: '20px',
				backgroundColor: 'FFFFFF',

				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',

				boxShadow: '-1px -10px 200px 0px rgba(5, 29, 61, 0.12)',
			}}
			square={false}
			elevation={2}>
			<Box>
				<Typography>Sign in or Sign up</Typography>
				<Box sx={{ mt: '50px' }}>
					<GoogleAuthButton
						onClickAuth={() => {
							handleAuthGoogle()
						}}
					/>
				</Box>
				<Box sx={{ mt: '15px' }}>
					<AppleAuthButton
						onClickAuth={() => {
							console.log('clicked Apple')
						}}
					/>
				</Box>
			</Box>
		</Paper>
	)
}

export default AuthBlock
