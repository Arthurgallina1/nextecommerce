import { BannerProps } from 'components/Banner'
import { GamecardProps } from 'components/Gamecard'
import Highlight, { HighlightProps } from 'components/Highlight'

import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'
import GameCardSlider from 'components/GameCardSlider'
import BannerSlider from 'components/Bannerslider'
import Tester from 'components/Tester'

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
      <Container>
        <Tester />
        <Heading lineLeft lineColor="secondary">
          News
        </Heading>

        <GameCardSlider items={newGames} color="black" />
      </Container>
    </S.SectionNews>

    <Container>
      <S.SectionMostPopular>
        <Heading lineLeft lineColor="secondary">
          Most Popular
        </Heading>
        <Highlight {...mostPopularHighlight} />
        <GameCardSlider items={mostPopularGames} />
      </S.SectionMostPopular>

      <S.SectionUpcoming>
        <Heading lineLeft lineColor="secondary">
          Upcomming
        </Heading>
        <GameCardSlider items={upcommingGames} />
        <Highlight {...upcommingHighligth} />
        <GameCardSlider items={upcommingMoreGames} />
      </S.SectionUpcoming>

      <S.SectionFreeGames>
        <Heading lineLeft lineColor="secondary">
          Free games
        </Heading>
        <Highlight {...freeHighligth} />
        <GameCardSlider items={freeGames} />
      </S.SectionFreeGames>
    </Container>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
