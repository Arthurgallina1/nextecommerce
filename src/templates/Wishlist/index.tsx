import Heading from 'components/Heading'
import Base from 'templates/Base'
import Showcase from 'components/Showcase'
import { Grid } from 'components/Grid'
import { Divider } from 'components/Divider'
import { Container } from 'components/Container'
import Gamecard, { GamecardProps } from 'components/Gamecard'
import { HighlightProps } from 'components/Highlight'

export type WishlistTemplateProps = {
  recommendedGames: GamecardProps[]
  recommendedHighlight: HighlightProps
  games?: GamecardProps[]
}

const Wishlist = ({
  games,
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      <Grid>
        {games?.map((game, index) => (
          <Gamecard {...game} key={`wishlist-${index}`} />
        ))}
      </Grid>
      <Divider />
    </Container>

    <Showcase
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)

export default Wishlist
