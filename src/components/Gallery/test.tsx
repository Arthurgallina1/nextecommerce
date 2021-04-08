import { render, screen } from '@testing-library/react'

import Gallery from './index'

describe('Gallery', () => {
  it('should render the heading', () => {
    const { container } = render(<Gallery />)
    expect(
      screen.getByRole('heading', { name: /Gallery/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
