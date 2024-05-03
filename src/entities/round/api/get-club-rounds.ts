import { apiClient } from '@/shared/api/base'
import { ClubRoundWithPaginationDto } from './dto/round-with-pagination.dto'
import { ClubRoundWithPagination } from '../types/round-with-pagination'
import { RoundQuery } from './query/round.query'
import { mapRound } from './mapper/map-rounds'

export const getClubRounds = async (
	page: number,
	size: number,
	sortBy: string,
): Promise<ClubRoundWithPagination> => {
	const query: RoundQuery = { page, size, sortBy }
	const result = await apiClient.get<ClubRoundWithPaginationDto>('/api/user/rounds', query)
	return {
		items: result.rounds.map(post => mapRound(post)),
		totalPages: result.totalPages,
	}
}
