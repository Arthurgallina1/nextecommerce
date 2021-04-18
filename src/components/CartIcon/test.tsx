import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartIcon from './index'

describe('CartIcon', () => {
  it('should render without badge', () => {
    renderWithTheme(<CartIcon />)
    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })

  it('should render with badge', () => {
    renderWithTheme(<CartIcon quantity={10} />)
    expect(screen.getByText(/10/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument()
  })

  it('should render with badge only if positives numbers', () => {
    renderWithTheme(<CartIcon quantity={-1} />)
    expect(screen.queryByText(/-1/i)).not.toBeInTheDocument()
  })
})
