import { render, screen } from '@testing-library/react'

import Game from './index'

describe('Game', () => {
  it('should render the heading', () => {
    const { container } = render(<Game />)
    expect(screen.getByRole('heading', { name: /Game/i })).toBeInTheDocument()
  })
})