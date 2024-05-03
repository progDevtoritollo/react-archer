import { User, UserRound } from './round'

// export type RoundWithPagination = {
// 	items: Round[]
// 	totalPages: number
// }

export type UserRoundWithPagination = {
	rounds: UserRound[]
	user: User
	totalPages: number
}
