import { useMutation } from '@tanstack/react-query'
import { postUserData } from '@/entities/user/api/post-userData'

export const usePostUserData = () =>
	useMutation({
		mutationFn: postUserData,
	})
