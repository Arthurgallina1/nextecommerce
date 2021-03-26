import '../../../.jest/match-media-mock'
import Bannerslider from './index'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

const items = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x582',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
]

describe('Bannerslider', () => {
  it('should render vertical slider', () => {
    const { container } = renderWithTheme(<Bannerslider items={items} />)
    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
  })

  it('should render with 1 active item', () => {
    const { container } = renderWithTheme(<Bannerslider items={items} />)
    expect(container.querySelector('.slick-active')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /defy death 1/i, hidden: false })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /defy death 2/i, hidden: true })
    ).toBeInTheDocument()
  })
})
