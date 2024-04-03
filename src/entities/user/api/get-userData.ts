import { apiClient } from '@/shared/api/base'
import { userDataDto } from './dto/user-data.dto'

export const getUserData = async () => {
	const res = await apiClient.get<userDataDto>('/api/user/settings')
	return res
}
