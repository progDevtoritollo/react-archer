import { apiClient } from '@/shared/api/base'
import { ClubWithPaginationDto } from './dto/club-with-pagination.dto'
import { ClubWithPagination } from '../types/club-with-pagination'
import { ClubQuery } from './query/club.query'
import { mapClub } from './mapper/map-clubs'

export const getClubs = async (
	page: number,
	clubName: string,
	country: string,
	size: number,
): Promise<ClubWithPagination> => {
	const query: ClubQuery = { page, clubName, country, size }
	const result = await apiClient.get<ClubWithPaginationDto>('/api/club/search', query)
	return {
		clubs: result.clubs.map(post => mapClub(post)),
		totalPages: result.totalPages,
	}
}
