import { apiClient } from '@/shared/api/base'
import { ClubWithPaginationDto } from './dto/club-with-pagination.dto'
import { ClubWithPagination } from '../types/club-with-pagination'
import { ClubQuery } from './query/club.query'
import { mapClub } from './mapper/map-clubs'

export const getClubs = async (page: number, searchParam: string): Promise<ClubWithPagination> => {
	const query: ClubQuery = { page, searchParam }
	const result = await apiClient.get<ClubWithPaginationDto>('/api/get/clubs/', query)
	return {
		clubs: result.clubs.map(post => mapClub(post)),
		totalPages: result.totalPages,
	}
}
