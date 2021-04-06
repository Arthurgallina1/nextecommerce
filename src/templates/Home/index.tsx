import { BannerProps } from 'components/Banner'
import { GamecardProps } from 'components/Gamecard'
import Highlight, { HighlightProps } from 'components/Highlight'

import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'
import GameCardSlider from 'components/GameCardSlider'
import BannerSlider from 'components/Bannerslider'
import Showcase from 'components/Showcase'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GamecardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GamecardProps[]
  upcommingGames: GamecardProps[]
  upcommingHighligth: HighlightProps
  upcommingMoreGames: GamecardProps[]
  freeGames: GamecardProps[]
  freeHighligth: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingMoreGames,
  upcommingHighligth,
  upcommingGames,
  freeGames,
  freeHighligth
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title="News" games={newGames} />
    </S.SectionNews>

    <Showcase
      title="Most Popular"
      games={mostPopularGames}
      highlight={mostPopularHighlight}
    />
    <S.SectionUpcoming>
      <Showcase title="Upcoming" games={upcommingGames} />
      <Showcase games={upcommingMoreGames} highlight={upcommingHighligth} />
    </S.SectionUpcoming>

    <Showcase title="Free games" highlight={freeHighligth} games={freeGames} />

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
