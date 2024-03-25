import { apiClient } from '@/shared/api/base'
import { GoogleURLRdo } from './rdo/auth-url.rdo'
export const getGoogleURL = async () => {
	const res = await apiClient.get<GoogleURLRdo>('api/auth/google/url')
	return res.url
}
