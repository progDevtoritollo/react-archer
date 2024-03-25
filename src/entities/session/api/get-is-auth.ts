import { apiClient } from '@/shared/api/base'
export const getAuthCheck = async () => {
	const res = await apiClient.get<boolean>('api/hello')
	return res
}
