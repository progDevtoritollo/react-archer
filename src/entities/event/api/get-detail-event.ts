// import { apiClient } from '@/shared/api/base'

// import { EventDetailQuery } from './query/event.query'
// import { mapDetailEvent } from './mapper/map-events'
// import { DetailPostDto } from './dto/detail-post.dto'
// import { DetailPost } from '../model/detail-post'

// export const getDetailEvent = async ({ id }: EventDetailQuery): Promise<DetailPost | null> => {
// 	if (!id) {
// 		return null
// 	}

// 	const result = await apiClient.get<DetailPostDto>(`/api/posts/${id}`)

// 	return mapDetailEvent(result)
// }
