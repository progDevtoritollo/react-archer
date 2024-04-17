import { useMutation } from '@tanstack/react-query'
import { postRound } from '@/entities/contest/api/post-round'

export const usePostRound = () =>
	useMutation({
		mutationFn: postRound,
	})
