import Base from 'templates/Base'
import { BannerProps } from 'components/Banner'
import { GamecardProps } from 'components/Gamecard'
import { HighlightProps } from 'components/Highlight'
import { Container } from 'components/Container'
import BannerSlider from 'components/Bannerslider'
import Showcase from 'components/Showcase'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GamecardProps[]
  newGamesTitle?: string
  mostPopularHighlight: HighlightProps
  mostPopularGames: GamecardProps[]
  mostPopularGamesTitle?: string
  upcomingGames: GamecardProps[]
  upcomingHighligth: HighlightProps
  upcomingGamesTitle?: string
  // upcomingMoreGames: GamecardProps[]
  freeGames: GamecardProps[]
  freeGamesTitle?: string
  freeHighligth: HighlightProps
}

const Home = ({
  banners,
  newGames,
  newGamesTitle = 'New Games',
  mostPopularHighlight,
  mostPopularGames,
  upcomingHighligth,
  upcomingGames,
  upcomingGamesTitle = 'Upcoming Titles',
  freeGames,
  freeHighligth,
  mostPopularGamesTitle = 'Most Popular Games',
  freeGamesTitle = 'Free Games'
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title={newGamesTitle} games={newGames} color="black" />
    </S.SectionNews>

    <Showcase
      title={mostPopularGamesTitle}
      games={mostPopularGames}
      highlight={mostPopularHighlight}
    />
    <Showcase
      title={upcomingGamesTitle}
      games={upcomingGames}
      highlight={upcomingHighligth}
    />

    <Showcase
      title={freeGamesTitle}
      highlight={freeHighligth}
      games={freeGames}
    />
  </Base>
)

export default Home
