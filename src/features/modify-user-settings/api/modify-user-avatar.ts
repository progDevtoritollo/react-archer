import { useMutation } from '@tanstack/react-query'
import { postUserAvatar } from '@/entities/user/api/post-userAvatar'

export const usePostUserAvatar = () =>
	useMutation({
		mutationFn: postUserAvatar,
	})
