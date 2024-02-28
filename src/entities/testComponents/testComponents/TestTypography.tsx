import React from 'react'
import { Typography, Button } from '@mui/material'

const TestTournament = () => {
	return (
		<>
			<Typography variant="logo" component="h1">
				Archer
			</Typography>
			<Typography variant="h1" color="text_dark.main" component="span">
				Activity
			</Typography>
			/
			<Typography variant="h1" color="#A8A6B3" component="span">
				User
			</Typography>
			<Typography variant="h2">Settings </Typography>
			<Typography variant="paragraph1" component="h1" color="#A8A6B3">
				duel with Руслан Тушенцов
			</Typography>
			<Typography variant="paragraph2" component="h1">
				Phone number
			</Typography>
			<Typography variant="button">Opponent</Typography>
		</>
	)
}

export default TestTournament
