import {
	Box,
	Pagination,
	Grid,
	Select,
	InputLabel,
	MenuItem,
	SelectChangeEvent,
	FormControl,
	Tab,
} from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { Event } from '@/entities/event'
import { usePageParam } from '../lib/use-page-params'
import { eventApi } from '@/entities/event'
import PageLoader from '@/widgets/PageLoader'

const DEFAULT_PAGE = 1
const DEFAULT_ITEMS_ON_SCREEN = 14

const Activity = () => {
	const [page, setPage] = usePageParam(DEFAULT_PAGE)
	const itemsOnScreen = DEFAULT_ITEMS_ON_SCREEN
	const [sortBy, setSortBy] = useState('date-ASC')
	const [activityType, setActivityType] = useState('all')
	const [owner, setOwner] = useState('my') //club, my, all

	const handleChangeOwnerParam = (event: React.SyntheticEvent, newValue: string) => {
		setOwner(newValue)
	}
	const handleChangeSortBy = (event: SelectChangeEvent) => {
		setSortBy(event.target.value as string)
	}
	const handleChangeEventType = (event: SelectChangeEvent) => {
		setActivityType(event.target.value as string)
	}

	const { data, isFetching, isLoading } = useQuery(
		eventApi.eventQueries.list(page, itemsOnScreen, owner, activityType, sortBy),
	)

	const events = [
		{
			id: 3535,
			userName: 'Игорь Марусич',
			score: 234,
			time: '3 min',
			userPhoto: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
		},
		{
			id: 45645,
			userName: 'Игорь Марусич',
			score: 2,
			opponentScore: 5,

			time: '12 min',
			opponentName: 'Loarense Aravisky',
			userPhoto: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
		},
		{
			id: 4568745,
			userName: 'Игорь Марусич',
			competitionPlace: 2,

			time: '12 min',
			userPhoto: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
		},
		{
			id: 7675,
			userName: 'Игорь Марусич',
			score: 234,

			time: '1 hour',
			userPhoto: 'URLdfbsfbof',
			competitionPlace: 2,
		},
		{
			id: 3454,
			userName: 'Игорь Марусич',
			score: 5,
			opponentScore: 4,
			time: '2 hours',
			opponentName: 'Loarense Aravisky',
			userPhoto: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
		},
		{
			id: 4949,
			userName: 'Игорь Марусич',
			score: 2,
			opponentScore: 4,
			time: '1 week',
			opponentName: 'Loarense Aravisky',
			userPhoto: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
		},
		{
			id: 56457,
			userName: 'Игорь Марусич',
			score: 289,
			time: '1 week',
			userPhoto: 'URLdfbsfbof',
			competitionPlace: 1,
		},
	]

	return (
		<Box>
			<Box sx={{ pt: '70px', pb: '30px', display: 'flex', justifyContent: 'space-between' }}>
				<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
					<InputLabel id="demo-simple-select-label">Event type</InputLabel>
					<Select
						sx={{ pl: '10px' }}
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={activityType}
						label="Event type"
						onChange={handleChangeEventType}>
						<MenuItem value="all">All</MenuItem>
						<MenuItem value="round">Round</MenuItem>
						<MenuItem value="duel">Duel</MenuItem>
						<MenuItem value="competition">Competition</MenuItem>
					</Select>
				</FormControl>
				<Box>
					<TabContext value={owner}>
						<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
							<TabList onChange={handleChangeOwnerParam} aria-label="lab API tabs example">
								<Tab label="My" value="my" />
								<Tab label="Club" value="club" />
								<Tab label="World" value="world" />
							</TabList>
						</Box>
					</TabContext>
				</Box>

				<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
					<InputLabel id="demo-simple-select-label">Sort By</InputLabel>
					<Select
						sx={{ pl: '10px' }}
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={sortBy}
						label="Sort By"
						onChange={handleChangeSortBy}>
						<MenuItem value="date-ASC">Date^</MenuItem>
						<MenuItem value="date-DESC">Date</MenuItem>
						<MenuItem value="title-ASC">Title^</MenuItem>
						<MenuItem value="title-DESC">Title</MenuItem>
						<MenuItem value="score-ASC">Score^</MenuItem>
						<MenuItem value="score-DESC">Score</MenuItem>
					</Select>
				</FormControl>
			</Box>

			{isLoading ? (
				<Box
					sx={{
						display: 'flex',
						height: '100vh-300px',
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<PageLoader />
				</Box>
			) : (
				<>
					<Grid container spacing={2}>
						{events.map(
							({
								id,
								userName,
								score,
								opponentScore,
								time,
								opponentName,
								userPhoto,
								competitionPlace,
							}) => (
								<Grid item xs={12} md={6} key={id}>
									<Event
										userName={userName}
										userScore={score}
										time={time}
										opponentScore={opponentScore}
										opponentName={opponentName}
										competitionPlace={competitionPlace}
										userPhoto={userPhoto}
									/>
								</Grid>
							),
						)}
					</Grid>
				</>
			)}

			<Box sx={{ display: 'flex', justifyContent: 'center' }}>
				<Pagination
					onChange={(_, page) => setPage(page)}
					page={page}
					count={data?.totalPages}
					variant="outlined"
					color="primary"
				/>
			</Box>
		</Box>
	)
}

export default Activity
