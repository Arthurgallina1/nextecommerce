import { ThemeProvider } from 'styled-components'
import { render, RenderResult } from '@testing-library/react'

import theme from '../../styles/theme'
import React, { createContext } from 'react'

export const UserContext = createContext({})

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)

export const renderWithContext = (
  contextValueObj,
  children: React.ReactNode
): RenderResult =>
  render(
    <UserContext.Provider value={contextValueObj}>
      {children}
    </UserContext.Provider>
  )
