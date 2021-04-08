import { render, screen } from '@testing-library/react'

import GameDetails from './index'

describe('GameDetails', () => {
  it('should render the heading', () => {
    const { container } = render(<GameDetails />)
    expect(
      screen.getByRole('heading', { name: /GameDetails/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
