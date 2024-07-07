import { apiClient } from '@/shared/api/base'
import { ClubRoundWithPaginationDto } from './dto/round-with-pagination.dto'
import { ClubRoundWithPagination } from '../types/round-with-pagination'
import { RoundQuery } from './query/round.query'
import { mapClubRound } from './mapper/map-rounds'

export const getClubRounds = async (
	page: number,
	size: number,
	sortBy: string,
): Promise<ClubRoundWithPagination> => {
	const query: RoundQuery = { page, size, sortBy }
	const result = await apiClient.get<ClubRoundWithPaginationDto>('/api/club/rounds', query)
	return {
		rounds: result.rounds.map(post => mapClubRound(post)),
		totalPages: result.totalPages,
	}
}
