import Menu from 'components/Menu'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import { Container } from 'components/Container'

import { BannerProps } from 'components/Banner'
import { GamecardProps } from 'components/Gamecard'
import Highlight, { HighlightProps } from 'components/Highlight'

import * as S from './styles'
import Bannerslider from 'components/Bannerslider'
import GameCardSlider from 'components/GameCardSlider'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GamecardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GamecardProps[]
  upcomingGames: GamecardProps[]
  upcomingHighLight: HighlightProps
  freeGames: GamecardProps[]
  freeGamesHighlight: HighlightProps
}
const Home = ({
  banners,
  newGames,
  mostPopularGames,
  mostPopularHighlight,
  upcomingGames,
  upcomingHighLight,
  freeGames,
  freeGamesHighlight
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <Bannerslider items={banners} />
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary" color="black">
        News
      </Heading>

      <GameCardSlider items={newGames} />
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Most Popular
      </Heading>
      <Highlight {...mostPopularHighlight} />
      <GameCardSlider items={mostPopularGames} />
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Upcoming
      </Heading>
      <Highlight {...upcomingHighLight} />
      <GameCardSlider items={upcomingGames} color="white" />
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Free Games
      </Heading>
      <Highlight {...freeGamesHighlight} />
      <GameCardSlider items={freeGames} />
    </Container>
    <Container>
      <Footer />
    </Container>
  </section>
)

export default Home
