import { ClubDto } from './club.dto'

export type ClubWithPaginationDto = {
	clubs: ClubDto[]
	totalPages: number
}
