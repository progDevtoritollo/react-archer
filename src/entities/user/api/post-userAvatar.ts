import { apiClient } from '@/shared/api/base'

export const postUserAvatar = async (body: FormData) => {
	const res = await apiClient.postFile<FormData>('/api/user/settings/upload/avatar', body)
	return res
}
