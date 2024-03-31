import { apiClient } from '@/shared/api/base'
import { userDataRdo } from './rdo/user-data.rdo'

export const getUserData = async () => {
	const res = await apiClient.get<userDataRdo>('/api/user/settings')
	return res
}
