import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/shared/api/query-client'

export const withQuery = (component: () => JSX.Element) => () => (
	<QueryClientProvider client={queryClient}>{component()}</QueryClientProvider>
)
