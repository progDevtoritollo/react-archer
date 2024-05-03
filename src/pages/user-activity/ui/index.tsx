import {
	Box,
	Pagination,
	Select,
	InputLabel,
	MenuItem,
	SelectChangeEvent,
	FormControl,
	Tab,
} from '@mui/material'
import { TabContext, TabList } from '@mui/lab'
import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

import { usePageParam } from '@/shared/lib/use-page-params'
import { roundApi } from '@/entities/round'

import PageLoader from '@/widgets/PageLoader'
import RoundList from '@/widgets/personal-round-list/ui'

const DEFAULT_PAGE = 1
const DEFAULT_ITEMS_ON_SCREEN = 14

const UserActivity = () => {
	const itemsOnScreen = DEFAULT_ITEMS_ON_SCREEN
	const [page, setPage] = usePageParam(DEFAULT_PAGE)
	const [sortBy, setSortBy] = useState('createDtm.ASC')
	const [activityType, setActivityType] = useState('round')

	const handleChangeActivityTypeParam = (event: React.SyntheticEvent, newValue: string) => {
		setActivityType(newValue)
	}
	const handleChangeSortBy = (event: SelectChangeEvent) => {
		setSortBy(event.target.value as string)
	}

	let isRounds = activityType === 'round'
	let isDuel = activityType === 'duel'

	const { data, isFetching, isLoading, refetch } = useQuery(
		roundApi.roundQueries.userList(page, itemsOnScreen, sortBy),
	)
	//  isRounds ?
	// useQuery(roundApi.roundQueries.list(page, itemsOnScreen, sortBy))
	// : isDuel
	//   ? useQuery(roundApi.roundQueries.list(page, itemsOnScreen, sortBy)) // duel request
	//   : useQuery(roundApi.roundQueries.list(page, itemsOnScreen, sortBy)) // competition request

	useEffect(() => {
		refetch()
	}, [sortBy, page])

	return (
		<Box>
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
			{isLoading && data !== undefined ? (
				<Box
					sx={{
						display: 'flex',
						height: '100vh',
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<PageLoader />
				</Box>
			) : (
				<>
					{isRounds && data?.rounds !== undefined && data?.user !== undefined ? (
						<Box>
							<RoundList user={data.user} rounds={data.rounds} />
						</Box>
					) : isDuel ? (
						<Box>DuelsList</Box>
					) : (
						<Box>CompetitionsList</Box>
					)}
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

export default UserActivity
