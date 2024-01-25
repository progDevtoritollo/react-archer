// import TestTournament from "../entities/testComponents/testComponents/TestTournament"
import TestTypography from '../entities/testComponents/testComponents/TestTypography'
import ActionCard from '@/shared/actionCard/ActionCard'

import { Fragment } from 'react'
import { Typography } from '@mui/material'
import ShotScore from '@/shared/ui/shot-score-box'

const TestPage: React.FC = () => {
	return (
		<Fragment>
			<Typography variant="h5" color="secondary">
				Test Page
			</Typography>
			<br />

			{/* <TestTournament /> */}

			<br />
			<TestTypography />
			<br />
			{Array.from({ length: 11 }).map((_, index) => (
				<ShotScore key={index} shotScore={index} />
			))}
		</Fragment>
	)
}

export default TestPage
