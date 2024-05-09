import { Club } from './club'

export type ClubWithPagination = {
	clubs: Club[]
	totalPages: number
}
