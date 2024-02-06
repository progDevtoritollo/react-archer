// import TestTournament from "../entities/testComponents/testComponents/TestTournament"
import TestTypography from '../entities/testComponents/testComponents/TestTypography'
import ActionCard from '@/shared/actionCard/ActionCard'

import { Fragment } from 'react'
import { Typography } from '@mui/material'

import Button from '@/shared/ui/button'
import RoundTable from '@/widgets/round-table/ui'
import { FullTarget } from '@/shared/ui/targets/full-target'

const TestPage: React.FC = () => {
	return (
		<Fragment>
			<Typography variant="h5" color="secondary">
				Test Page
			</Typography>
			<br />
			{/* <TestTournament /> */}
			<RoundTable />
			<FullTarget />
			<br />
			<TestTypography />
			<br />
			<Button
				paddingSide={'20px'}
				onClick={() => console.log('button clicked')}
				text="Finish"
				type={'usual'}
			/>
			<Button onClick={() => console.log('button clicked')} text="Surrender" type={'surrender'} />
			<Button onClick={() => console.log('button clicked')} text="Clear target" type={'blue'} />
			<Button onClick={() => console.log('button clicked')} text="Undo last" type={'undo'} />
		</Fragment>
	)
}

export default TestPage
