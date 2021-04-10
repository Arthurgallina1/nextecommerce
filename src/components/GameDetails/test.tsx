import 'match-media-mock'
import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameDetails, { GameDetailsProps } from './index'

const props: GameDetailsProps = {
  developer: 'Different Tales',
  platforms: ['windows', 'apple', 'linux'],
  releaseDate: '2020-11-21T23:00:00',
  publisher: 'walkout',
  rating: 'BR0',
  genres: ['Role-playing / Narrative']
}
describe('GameDetails', () => {
  it('should render the blocks', () => {
    renderWithTheme(<GameDetails {...props} />)
    expect(screen.getByRole('heading', { name: /developer/i }))
    expect(screen.getByRole('heading', { name: /release date/i }))
    expect(screen.getByRole('heading', { name: /platforms/i }))
    expect(screen.getByRole('heading', { name: /publisher/i }))
    expect(screen.getByRole('heading', { name: /rating/i }))
    expect(screen.getByRole('heading', { name: /genres/i }))
  })

  it('should render platforms icons', () => {
    renderWithTheme(<GameDetails {...props} />)
    expect(screen.getByRole('img', { name: /windows/i }))
    expect(screen.getByRole('img', { name: /linux/i }))
    expect(screen.getByRole('img', { name: /mac/i }))
  })

  it('should render formated date', () => {
    renderWithTheme(<GameDetails {...props} />)
    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument()
  })

  it('should render free rating when BR0', () => {
    renderWithTheme(<GameDetails {...props} />)
    expect(screen.getByText(/free/i)).toBeInTheDocument()
  })

  it('should render the developer', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText(/Different Tales/i)).toBeInTheDocument()
  })

  it('should render the publisher', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText(/walkout/i)).toBeInTheDocument()
  })

  it('should render 18+ rating when BR18', () => {
    renderWithTheme(<GameDetails {...props} rating="BR18" />)
    expect(screen.getByText(/18+/i)).toBeInTheDocument()
  })

  it('should render a list of generes', () => {
    renderWithTheme(<GameDetails {...props} />)
    expect(screen.getByText(/role-playing/i)).toBeInTheDocument()
  })
})
