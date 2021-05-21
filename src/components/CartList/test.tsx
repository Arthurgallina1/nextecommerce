import { render, screen } from 'utils/test-utils'
import { CartContextDefaultValues } from 'hooks/use-cart'
import CartList from './index'
import items from './mock'

describe('CartList', () => {
  it('should render the cart list', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items,
      total: 'R$ 250,00'
    }
    const { container } = render(<CartList />, { cartProviderProps })

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('R$ 250,00')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  // it('should render loading', () => {
  //   const cartProviderProps = {
  //     ...CartContextDefaultValues,
  //     items
  //   }
  //   render(<CartList hasButton />, { cartProviderProps })

  //   expect(screen.getByTitle(/loading/i)).toBeInTheDocument()
  // })

  it('should render the button', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items
    }
    render(<CartList hasButton />, { cartProviderProps })

    expect(screen.getByText(/buy it now/i)).toBeInTheDocument()
  })

  it('should render empty if there are no games', () => {
    render(<CartList hasButton />)

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
    expect(screen.queryByText(/total/i)).not.toBeInTheDocument()
  })
})
