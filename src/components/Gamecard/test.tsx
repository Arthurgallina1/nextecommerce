import { render, screen } from '@testing-library/react'

import Gamecard from './index'

describe('Gamecard', () => {
  it('should render the heading', () => {
    const { container } = render(<Gamecard />)
    expect(
      screen.getByRole('heading', { name: /Gamecard/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
