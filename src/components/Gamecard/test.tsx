import 'session.mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Gamecard from './index'

const props = {
  id: '1',
  title: 'Red Dead Redemption',
  developer: 'Rockstar Games',
  img: '/img/red-dead-img.jpg',
  price: 300,
  slug: 'read-dead-redemption'
}

describe('Gamecard', () => {
  it('should render correclty', () => {
    renderWithTheme(<Gamecard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `/game/${props.slug}`
    )

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    renderWithTheme(<Gamecard {...props} />)

    //preço n tenha line through
    expect(screen.getByText('$300.00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
    //preço tenha bg secundario
    expect(screen.getByText('$300.00')).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('should render a line-throught in price when promotional', () => {
    renderWithTheme(<Gamecard {...props} promotionalPrice={250} />)

    //preço tenha line through
    expect(screen.getByText('$300.00')).toHaveStyle({
      textDecoration: 'line-through'
    })
    //preço novo promocional não tem line throgu
    expect(screen.getByText('$250.00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render Ribbon', () => {
    renderWithTheme(
      <Gamecard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )
    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
    expect(ribbon).toBeInTheDocument()
  })
})
