import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export const withQuery = (component: () => JSX.Element) => () => (
	<QueryClientProvider client={queryClient}>{component()}</QueryClientProvider>
)
