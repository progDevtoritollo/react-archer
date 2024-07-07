import { FC } from 'react'
import {
	Box,
	Select,
	InputLabel,
	MenuItem,
	SelectChangeEvent,
	FormControl,
	Tab,
} from '@mui/material'
import { TabContext, TabList } from '@mui/lab'

interface FilterSortActivityHeaderProps {
	activityType: string
	sortBy: string
	setActivityType: (value: string) => void
	setSortBy: (value: string) => void
}

const FilterSortActivityHeader: FC<FilterSortActivityHeaderProps> = ({
	activityType,
	sortBy,
	setActivityType,
	setSortBy,
}) => {
	const handleChangeActivityTypeParam = (event: React.SyntheticEvent, newValue: string) => {
		console.log(event, 'src/widgets/filter-sort-header/ui/index.tsx:26:41')
		setActivityType(newValue)
	}
	const handleChangeSortBy = (event: SelectChangeEvent) => {
		setSortBy(event.target.value as string)
	}

	return (
		<Box sx={{ pt: '70px', pb: '30px', display: 'flex', justifyContent: 'space-around' }}>
			<TabContext value={activityType}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<TabList onChange={handleChangeActivityTypeParam} aria-label="lab API tabs example">
						<Tab label="Round" value="round" />
						<Tab label="Duel" value="duel" />
						<Tab label="Competition" value="competition" />
					</TabList>
				</Box>
			</TabContext>

			<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
				<InputLabel id="demo-simple-select-label">Sort By</InputLabel>
				<Select
					sx={{ pl: '10px' }}
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={sortBy}
					label="Sort By"
					onChange={handleChangeSortBy}>
					<MenuItem value="createDtm.ASC">Date^</MenuItem>
					<MenuItem value="createDtm.DESC">Date</MenuItem>
					<MenuItem value="totalScore.ASC">Score^</MenuItem>
					<MenuItem value="totalScore.DESC">Score</MenuItem>
				</Select>
			</FormControl>
		</Box>
	)
}

export default FilterSortActivityHeader
