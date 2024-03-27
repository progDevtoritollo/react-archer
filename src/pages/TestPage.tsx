// import TestTournament from "../entities/testComponents/testComponents/TestTournament"
import TestTypography from '../entities/testComponents/testComponents/TestTypography'
import ActionCard from '@/shared/actionCard/ActionCard'

import { Fragment } from 'react'
import { Typography } from '@mui/material'

import RoundTable from '@/widgets/round-table/ui'
import { FullTarget } from '@/shared/ui/targets/full-target'

const TestPage: React.FC = () => {
	return (
		<Fragment>
			<Typography variant="h1" color="secondary">
				Test Page
			</Typography>
			<br />
			{/* <TestTournament /> */}
			<FullTarget />
			<br />
			<TestTypography />
			<br />
		</Fragment>
	)
}

export default TestPage
