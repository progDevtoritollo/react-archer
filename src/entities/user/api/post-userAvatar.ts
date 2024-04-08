import { apiClient } from '@/shared/api/base'

export const postUserAvatar = async (body: FormData) => {
	const res = await apiClient.postFile<FormData>('/api/user/settings/avatar', body)
	return res
}
