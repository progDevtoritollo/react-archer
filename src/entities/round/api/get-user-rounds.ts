import { apiClient } from '@/shared/api/base'
import { UserRoundWithPaginationDto } from './dto/round-with-pagination.dto'
import { UserRoundWithPagination } from '../types/round-with-pagination'
import { RoundQuery } from './query/round.query'
import { mapUserRound } from './mapper/map-rounds'

export const getUserRounds = async (
	page: number,
	size: number,
	sortBy: string,
): Promise<UserRoundWithPagination> => {
	const query: RoundQuery = { page, size, sortBy }
	const result = await apiClient.get<UserRoundWithPaginationDto>('/api/user/rounds', query)
	return {
		rounds: result.rounds.map(post => mapUserRound(post)),
		user: {
			id: result.user.id,
			name: result.user.name,
			pictureUrl: result.user.pictureUrl,
			rank: result.user.rank,
			surname: result.user.surname,
			username: result.user.username,
		},
		totalPages: result.totalPages,
	}
}
