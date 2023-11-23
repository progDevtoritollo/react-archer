import { ThemeProvider } from '@mui/material'

import theme from '@/app/config/theme'

export const withMIU = (component: () => JSX.Element) => () => (
  <ThemeProvider theme={theme}>
    {component()}
  </ThemeProvider>
);

