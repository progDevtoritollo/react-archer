import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			// cacheTime: 10 * 60 * 1000,
			staleTime: 5 * 60 * 1000,
			gcTime: 5 * 60 * 1000,
			retry: 1,
		},
	},
})
