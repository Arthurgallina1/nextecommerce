import Heading from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'
import GameCardSlider from 'components/GameCardSlider'

import * as S from './styles'
import { GamecardProps } from 'components/Gamecard'

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GamecardProps[]
  color?: 'black' | 'white'
}

const Showcase = ({
  title,
  highlight,
  games,
  color = 'white'
}: ShowcaseProps) => (
  <S.Wrapper data-cy={title || 'showcase'}>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider items={games} color={color} />}
  </S.Wrapper>
)

export default Showcase
