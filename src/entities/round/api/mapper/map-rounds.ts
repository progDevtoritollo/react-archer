import { Round } from '../../types/round'
import { UserRoundDto } from '../dto/round.dto'
// import { DetailEventDto } from '../dto/detail-event.dto'
// import { DetailEvent } from '../../types/detail-event'

export const mapRound = (dto: UserRoundDto): Round => ({
	id: +dto.id.toString(),
	score: dto.score,
	createdDate: dto.createdDate.toString(),
})

// export const mapDetailEvent = (dto: DetailEventDto): DetailEvent => ({
// 	id: dto.id.toString(),
// 	score: dto.score,
// 	tags: dto.tags,
// 	userId: dto.userId.toString(),
// 	reactions: dto.reactions.toString(), //! change as DetailEvent & DetailEventDto
// })
