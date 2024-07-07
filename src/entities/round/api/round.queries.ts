import { keepPreviousData, queryOptions } from '@tanstack/react-query'
import { getUserRounds } from './get-user-rounds'
import { getClubRounds } from './get-club-rounds'

// import { getDetailRound } from './get-detail-round'
// import { RoundDetailQuery } from './query/round.query'

export const roundQueries = {
	all: () => ['rounds'],

	lists: () => [...roundQueries.all(), 'list'],
	userList: (page: number, size: number, sortBy: string) =>
		queryOptions({
			queryKey: [...roundQueries.lists(), page],
			queryFn: () => getUserRounds(page, size, sortBy),
			placeholderData: keepPreviousData,
		}),
	clubList: (page: number, size: number, sortBy: string) =>
		queryOptions({
			queryKey: [...roundQueries.lists(), page],
			queryFn: () => getClubRounds(page, size, sortBy),
			placeholderData: keepPreviousData,
		}),

	// details: () => [...eventQueries.all(), 'detail'],
	// detail: (query?: EventDetailQuery) =>
	// 	queryOptions({
	// 		queryKey: [...eventQueries.details(), query?.id],
	// 		queryFn: () => getDetailEvent({ id: query?.id }),
	// 		staleTime: 5000,
	// 	}),
}
