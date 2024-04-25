import { Event } from './event'

export type EventWithPagination = {
	events: Event[]
	total: number
	totalPages: number
	skip: number
	limit: number
}
