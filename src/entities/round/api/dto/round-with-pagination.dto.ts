import { RoundDto, UserRoundDto, UserDto } from './round.dto'

export type ClubRoundWithPaginationDto = {
	items: { user: UserDto; round: RoundDto }
	totalPages: number
}

export type UserRoundWithPaginationDto = {
	rounds: UserRoundDto[]
	user: UserDto
	totalPages: number
}
