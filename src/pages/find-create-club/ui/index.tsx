import { lazy } from 'react'
import { Box } from '@mui/material'
import { useState } from 'react'
import { Tab } from '@mui/material'
import { TabContext, TabList } from '@mui/lab'

const FindClub = lazy(() => import('@/widgets/find-club/ui'))
const CreateClub = lazy(() => import('@/widgets/create-club/ui'))

const FindCreateClub = () => {
	const [section, setSection] = useState('find')

	let isFind = section === 'find'

	const handleChangeSection = (event: React.SyntheticEvent, newValue: string) => {
		console.log(event, 'src/pages/find-create-club/ui/index.tsx:15:31')
		setSection(newValue)
	}

	return (
		<Box>
			<Box>
				<TabContext value={section}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<TabList onChange={handleChangeSection} aria-label="lab API tabs example">
							<Tab label="Find" value="find" />
							<Tab label="Create" value="create" />
						</TabList>
					</Box>
				</TabContext>
			</Box>
			{isFind ? (
				<Box>
					<FindClub />
				</Box>
			) : (
				<Box>
					<CreateClub />
				</Box>
			)}
		</Box>
	)
}

export default FindCreateClub
