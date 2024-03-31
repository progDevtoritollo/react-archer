import { apiClient } from '@/shared/api/base'
import { userDataDto } from './dto/user-data.dto'

export const postUserData = async (body: userDataDto) => {
	const res = await apiClient.post<userDataDto>('/api/user/settings', body)
	return res
}
