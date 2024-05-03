export type RoundQuery = {
	page: number
	size: number // size items on page/ limit items on page
	sortBy: string
}

export type RoundDetailQuery = {
	id?: number
}
