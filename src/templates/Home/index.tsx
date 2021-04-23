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
  mostPopularHighlight: HighlightProps
  mostPopularGames: GamecardProps[]
  upcomingGames: GamecardProps[]
  upcomingHighligth: HighlightProps
  // upcomingMoreGames: GamecardProps[]
  freeGames: GamecardProps[]
  freeHighligth: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingHighligth,
  upcomingGames,
  freeGames,
  freeHighligth
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title="News" games={newGames} color="black" />
    </S.SectionNews>

    <Showcase
      title="Most Popular"
      games={mostPopularGames}
      highlight={mostPopularHighlight}
    />
    <Showcase
      title="Upcoming"
      games={upcomingGames}
      highlight={upcomingHighligth}
    />

    <Showcase title="Free games" highlight={freeHighligth} games={freeGames} />
  </Base>
)

export default Home
