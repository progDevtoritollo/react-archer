import { keepPreviousData, queryOptions } from '@tanstack/react-query'
import { getEvents } from './get-events'
// import { getDetailEvent } from './get-detail-event'
// import { EventDetailQuery } from './query/event.query'

export const eventQueries = {
	all: () => ['events'],

	lists: () => [...eventQueries.all(), 'list'],
	list: (page: number, limit: number, owner: string, activityType: string, sortBy: string) =>
		queryOptions({
			queryKey: [...eventQueries.lists(), page, limit],
			queryFn: () => getEvents(page, limit, owner, activityType, sortBy),
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
