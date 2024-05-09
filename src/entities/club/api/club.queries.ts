import { keepPreviousData, queryOptions } from '@tanstack/react-query'
import { getClubs } from './get-clubs'

export const clubQueries = {
	all: () => ['clubs'],

	lists: () => [...clubQueries.all(), 'list'],
	list: (page: number, searchParam: string) =>
		queryOptions({
			queryKey: [...clubQueries.lists(), page],
			queryFn: () => getClubs(page, searchParam),
			placeholderData: keepPreviousData,
		}),
}
