import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from './index'

describe('Auth', () => {
  it('should render logos, title, subtitle and children', () => {
    renderWithTheme(
      <Auth title="Test Title">
        <input type="text" />
      </Auth>
    )
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)
    expect(
      screen.getByRole('heading', {
        name: 'All your favorite games in one place'
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: 'WON is the best and most complete gaming platform'
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: 'Test Title'
      })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
