import { useMutation } from '@tanstack/react-query'
import { postClubAvatar } from '@/entities/club/api/post-clubAvatar'

export const usePostClubAvatar = () =>
	useMutation({
		mutationFn: postClubAvatar,
	})
