import { ThemeProvider, CssBaseline } from '@mui/material'

import theme from '@/app/config/ui/theme'

export const withMIU = (component: () => JSX.Element) => () => (
	<ThemeProvider theme={theme}>
		<CssBaseline />
		{component()}
	</ThemeProvider>
)
