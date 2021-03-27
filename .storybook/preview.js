import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global.ts'
import theme from 'styles/theme.ts'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  )
]
