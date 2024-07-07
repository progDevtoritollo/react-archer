import { Round, ClubMemberRound } from '../../types/round'
import { UserRoundDto, ClubMemberRoundDto } from '../dto/round.dto'
// import { DetailEventDto } from '../dto/detail-event.dto'
// import { DetailEvent } from '../../types/detail-event'

export const mapUserRound = (dto: UserRoundDto): Round => ({
	id: +dto.id.toString(),
	score: dto.score,
	createdDate: dto.createdDate.toString(),
})

export const mapClubRound = (dto: ClubMemberRoundDto): ClubMemberRound => ({
	id: +dto.id.toString(),
	date: dto.date.toString(),
	score: +dto.score.toString(),
	userName: dto.userName.toString(),
	userSurname: dto.userSurname.toString(),
	nickname: dto.nickname.toString(),
	image: dto.image.toString(),
})

// export const mapDetailEvent = (dto: DetailEventDto): DetailEvent => ({
// 	id: dto.id.toString(),
// 	score: dto.score,
// 	tags: dto.tags,
// 	userId: dto.userId.toString(),
// 	reactions: dto.reactions.toString(), //! change as DetailEvent & DetailEventDto
// })
