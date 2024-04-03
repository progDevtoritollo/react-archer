import { apiClient } from '@/shared/api/base'
import { userDataRdo } from './rdo/user-data.rdo'

export const postUserData = async (body: userDataRdo) => {
	const res = await apiClient.post<userDataRdo>('/api/user/settings', body)
	return res
}
