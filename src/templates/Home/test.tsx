import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Home from './index'

describe('Home', () => {
  beforeEach(() => {
    renderWithTheme(<Home />)
  })

  it('should render the menu and footer', () => {
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument()
  })

  it('should render sections', () => {
    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /upcoming/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()
  })
})
