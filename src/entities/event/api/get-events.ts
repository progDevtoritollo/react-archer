import { apiClient } from '@/shared/api/base'
import { EventWithPaginationDto } from './dto/event-with-pagination.dto'
import { EventWithPagination } from '../types/event-with-pagination'
import { EventQuery } from './query/event.query'
import { mapEvent } from './mapper/map-events'

const calculateEventPage = (totalCount: number, limit: number) => Math.floor(totalCount / limit)

export const getEvents = async (
	page: number,
	limit: number, // size items on page - limit items on page
	owner: string, // del
	activityType: string,
	sortBy: string,
): Promise<EventWithPagination> => {
	const skip = (page - 1) * limit // del
	const query: EventQuery = { skip, limit, owner, activityType, sortBy }
	const result = await apiClient.get<EventWithPaginationDto>('/api/get/events/', query)
	return {
		events: result.events.map(post => mapEvent(post)),
		limit: result.limit, // del
		skip: result.skip, // del
		total: result.total, // del
		totalPages: calculateEventPage(result.total, limit),
	}
}
