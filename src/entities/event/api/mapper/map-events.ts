import { Event } from '../../types/event'
import { EventDto } from '../dto/event.dto'
// import { DetailEventDto } from '../dto/detail-event.dto'
// import { DetailEvent } from '../../types/detail-event'

export const mapEvent = (dto: EventDto): Event => ({
	id: +dto.id.toString(),
	time: dto.time.toString(),
	score: dto.score,
	userName: dto.userName.toString(),
	nickname: dto.nickname?.toString(),
	userPhoto: dto.userPhoto?.toString(),
	opponentScore: dto.opponentScore,
	opponentName: dto.opponentName?.toString(),
	competitionPlace: dto.competitionPlace,
})

// export const mapDetailEvent = (dto: DetailEventDto): DetailEvent => ({
// 	id: dto.id.toString(),
// 	score: dto.score,
// 	tags: dto.tags,
// 	userId: dto.userId.toString(),
// 	reactions: dto.reactions.toString(), //! change as DetailEvent & DetailEventDto
// })
