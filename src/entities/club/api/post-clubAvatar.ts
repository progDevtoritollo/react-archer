import { apiClient } from '@/shared/api/base'

export const postClubAvatar = async (body: FormData) => {
	const res = await apiClient.postFile<FormData>(`/api/club/update/image`, body)
	return res
}
