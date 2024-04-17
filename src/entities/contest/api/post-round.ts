import { apiClient } from '@/shared/api/base'
import { roundRdo } from './rdo/round.rdo'

export const postRound = async (body: roundRdo) => {
	const res = await apiClient.post<roundRdo>('/api/rounds/save', body)
	return res
}
