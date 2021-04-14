import { screen } from '@testing-library/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import 'jest-styled-components'
import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Button/>', () => {
  it('should render the medium by default', () => {
    const { container } = renderWithTheme(<Button>Buy now won</Button>)
    expect(screen.getByRole('button', { name: /Buy now won/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Buy now won</Button>)
    expect(screen.getByRole('button', { name: /Buy now won/i })).toHaveStyle({
      height: '3rem',
      padding: '0.8rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Buy now won</Button>)
    expect(screen.getByRole('button', { name: /Buy now won/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })

  it('should render the a full width version', () => {
    renderWithTheme(<Button fullWidth>Buy now won</Button>)
    expect(screen.getByRole('button', { name: /Buy now won/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render the an icon version version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now won</Button>
    )
    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render a disabled Button', () => {
    renderWithTheme(<Button disabled>Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled'
      }
    )
  })

  it('should render the an minimal version version', () => {
    renderWithTheme(
      <Button minimal icon={<AddShoppingCart data-testid="icon" />}>
        Buy now won
      </Button>
    )

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      background: 'none',
      color: '#F231A5'
    })

    expect(
      screen.getByRole('button', { name: /buy now/i })
    ).toHaveStyleRule('background', 'none', { modifier: ':hover' })
  })

  it('should render Button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Buy Now Link
      </Button>
    )

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
