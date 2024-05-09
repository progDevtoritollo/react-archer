import { Box } from '@mui/material'
import { useState } from 'react'
import { Tab } from '@mui/material'
import { TabContext, TabList } from '@mui/lab'
import CreateClub from '@/widgets/create-club/ui'

const FindCreateClub = () => {
	const [section, setSection] = useState('find')

	let isFind = section === 'find'

	const handleChangeSection = (event: React.SyntheticEvent, newValue: string) => {
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
				<Box>// Find</Box>
			) : (
				<Box>
					<CreateClub />
				</Box>
			)}
		</Box>
	)
}

export default FindCreateClub
