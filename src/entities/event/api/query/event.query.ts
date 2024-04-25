export type EventQuery = {
	limit: number
	skip: number
	owner: string
	activityType: string
	sortBy: string
}

export type EventDetailQuery = {
	id?: number
}
