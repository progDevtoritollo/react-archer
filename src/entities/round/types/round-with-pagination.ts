import { User, Round, ClubMemberRound } from './round'

export type ClubRoundWithPagination = {
	rounds: ClubMemberRound[]
	totalPages: number
}

export type UserRoundWithPagination = {
	rounds: Round[]
	user: User
	totalPages: number
}
