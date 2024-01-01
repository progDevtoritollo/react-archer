import { ThemeProvider } from '@mui/material'

import theme from '@/app/config/theme'
console.log(theme)
export const withMIU = (component: () => JSX.Element) => () => <ThemeProvider theme={theme}>{component()}</ThemeProvider>
