import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartList from './index'
import mockItems from './mock'

describe('CartList', () => {
  it('should render the cart list', () => {
    const { container } = renderWithTheme(
      <CartList items={mockItems} total="R$ 250,00" />
    )

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('R$ 250,00')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
