import { apiClient } from '@/shared/api/base'

const getParam = () => {
	const urlParams = new URLSearchParams(window.location.search)
	const codeParamEncoded = urlParams.get('code')
	if (typeof codeParamEncoded === 'string') {
		const codeParamDecoded = encodeURIComponent(codeParamEncoded)
		return codeParamDecoded
	}
}

export const getToken = async () => {
	const codeParam = getParam()
	const res = await apiClient.get<boolean>(`api/auth/google/callback?code=${codeParam}`)
	return res
}
