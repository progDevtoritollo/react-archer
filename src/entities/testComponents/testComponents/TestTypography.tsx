import React from 'react'
import { Typography, Button } from '@mui/material'

const TestTournament = () => {
	return (
		<>
			<Typography variant="h1" color="text_dark.main">
				Header 1
			</Typography>
			<Typography variant="h2">Header 2 </Typography>
			<Typography variant="h3">Header 3 </Typography>
			<Typography variant="h4">Header 4 </Typography>
			<Typography variant="h5">Header 5 </Typography>
			<Typography variant="h6">Header 6 </Typography>
			<Typography variant="subtitle1" gutterBottom>
				subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
			</Typography>
			<Typography variant="subtitle2" gutterBottom>
				subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
			</Typography>
			<Typography variant="body1" gutterBottom>
				body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
				unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
				dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
			</Typography>
			<Typography variant="body2" gutterBottom>
				body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
				unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
				dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
			</Typography>
			<Button>
				<Typography variant="button" display="block" gutterBottom>
					button text
				</Typography>
			</Button>

			<Typography variant="caption" display="block" gutterBottom>
				caption text
			</Typography>
			<Typography variant="overline" display="block" gutterBottom>
				overline text
			</Typography>
		</>
	)
}

export default TestTournament
