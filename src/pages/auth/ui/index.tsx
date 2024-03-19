import { Box, Paper, Typography } from '@mui/material'
import { FC } from 'react'
import { GoogleAuthButton } from '@/shared/ui/buttons/google-auth-button'
import { AppleAuthButton } from '@/shared/ui/buttons/apple-auth-button'

// at rendering get url by  /api/auth/google/url - to get google auth link for user

const AuthBlock: FC = () => {
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
						onClick={() => {
							console.log('clicked Google')
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
