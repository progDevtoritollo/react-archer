import { keepPreviousData, queryOptions } from '@tanstack/react-query'
import { getClubs } from './get-clubs'
import { getCountryList } from './get-club`s-country-list'

export const clubQueries = {
	all: () => ['clubs'],

	lists: () => [...clubQueries.all(), 'list'],
	list: (page: number, searchParam: string, country: string, size: number) =>
		queryOptions({
			queryKey: [...clubQueries.lists(), page],
			queryFn: () => getClubs(page, searchParam, country, size),
			placeholderData: keepPreviousData,
		}),
	countriesList: () =>
		queryOptions({
			queryKey: [...clubQueries.lists()],
			queryFn: () => getCountryList(),
			placeholderData: keepPreviousData,
		}),
}
