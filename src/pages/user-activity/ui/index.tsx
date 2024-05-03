import { Box, Pagination } from '@mui/material'
import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

import { usePageParam } from '@/shared/lib/use-page-params'
import { roundApi } from '@/entities/round'

import PageLoader from '@/widgets/PageLoader'
import RoundList from '@/widgets/personal-round-list/ui'
import FilterSortActivityHeader from '@/widgets/filter-sort-header/ui'

const DEFAULT_PAGE = 1
const DEFAULT_ITEMS_ON_SCREEN = 14

const UserActivity = () => {
	const itemsOnScreen = DEFAULT_ITEMS_ON_SCREEN

	const [page, setPage] = usePageParam(DEFAULT_PAGE)
	const [sortBy, setSortBy] = useState('createDtm.ASC')
	const [activityType, setActivityType] = useState('round')

	let isRounds = activityType === 'round'
	let isDuel = activityType === 'duel'

	const { data, isLoading, isError, refetch } = useQuery(
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

	if (isError) {
		return <Box>Something went wrong</Box>
	}
	return (
		<Box>
			<FilterSortActivityHeader
				activityType={activityType}
				sortBy={sortBy}
				setActivityType={setActivityType}
				setSortBy={setSortBy}
			/>
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
