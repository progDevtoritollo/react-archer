import { useMutation } from '@tanstack/react-query'
import { postClubData } from '@/entities/club/api/post-clubData'

export const usePostClubData = () =>
	useMutation({
		mutationFn: postClubData,
	})
