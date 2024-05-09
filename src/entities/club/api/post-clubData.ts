import { apiClient } from '@/shared/api/base'
import { clubDataRdo } from './rdo/club-data.rdo'

export const postClubData = async (body: clubDataRdo) => {
	const res = await apiClient.post<clubDataRdo>('/api/club/create', body)
	return res
}
