// import TestTournament from "../entities/testComponents/testComponents/TestTournament"
import TestTypography from '../entities/testComponents/testComponents/TestTypography'
import ActionCard from '@/shared/actionCard/ActionCard'

import { Fragment } from 'react'
import { Typography } from '@mui/material'

const TestPage: React.FC = () => {
	return (
		<Fragment>
			<Typography
				variant='h5'
				color='secondary'>
				Test Page
			</Typography>
			<br />

			{/* <TestTournament /> */}

			<br />
			<TestTypography />
			<br />
			<ActionCard />
		</Fragment>
	)
}

export default TestPage
