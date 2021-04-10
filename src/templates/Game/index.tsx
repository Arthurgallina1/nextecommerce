import Gallery, { GalleryImageProps } from 'components/Gallery'
import { GameDetailsProps } from 'components/GameDetails'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import TextContent from 'components/TextContent'
import GameDetails from 'components/GameDetails'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'
import * as S from './styles'
import { GamecardProps } from 'components/Gamecard'
import { HighlightProps } from 'components/Highlight'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcommingGames: GamecardProps[]
  upcommingHighlight: HighlightProps
  recommendedGames: GamecardProps[]
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcommingGames,
  upcommingHighlight
}: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="img" aria-label="cover" />
    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>

      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>

      <S.SectionGameDetails>
        <GameDetails {...details} />
      </S.SectionGameDetails>

      <Showcase
        title="Upcoming games"
        games={upcommingGames}
        highlight={upcommingHighlight}
      />

      <Showcase title="You may like these games" games={upcommingGames} />
    </S.Main>
  </Base>
)

export default Game
