import Heading from 'components/Heading'
import Base from 'templates/Base'
import Showcase from 'components/Showcase'
import { Grid } from 'components/Grid'
import { Divider } from 'components/Divider'
import { Container } from 'components/Container'
import Gamecard, { GamecardProps } from 'components/Gamecard'
import { HighlightProps } from 'components/Highlight'
import Empty from 'components/Empty'
import { useWishlist } from 'hooks/use-wishlist'
import Loader from 'components/Loader'

import * as S from './styles'

export type WishlistTemplateProps = {
  recommendedGames: GamecardProps[]
  recommendedTitle?: string
  recommendedHighlight: HighlightProps
}

const Wishlist = ({
  recommendedGames,
  recommendedTitle = 'You may like these games',
  recommendedHighlight
}: WishlistTemplateProps) => {
  const { items, loading } = useWishlist()

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>
        {loading ? (
          <S.Loading>
            <Loader />
          </S.Loading>
        ) : items.length >= 1 ? (
          <Grid>
            {items?.map((game, index) => (
              <Gamecard {...game} key={`wishlist-${index}`} />
            ))}
          </Grid>
        ) : (
          <Empty
            title="Your wishlist is empty"
            description="Games added to your wishlist will appear here"
            hasLink
          />
        )}

        <Divider />
      </Container>

      <Showcase
        title={recommendedTitle || 'You may like these games'}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Wishlist
