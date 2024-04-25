import { EventDto } from './event.dto'

export type EventWithPaginationDto = {
	events: EventDto[]
	total: number
	totalPages: number
	skip: number
	limit: number
}
