import { ClubMemberRoundDto, UserRoundDto, UserDto } from './round.dto'

export type ClubRoundWithPaginationDto = {
	rounds: ClubMemberRoundDto[]
	totalPages: number
}

export type UserRoundWithPaginationDto = {
	rounds: UserRoundDto[]
	user: UserDto
	totalPages: number
}
