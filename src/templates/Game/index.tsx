import { NextSeo } from 'next-seo'

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
import { Divider } from 'components/Divider'

export type GameTemplateProps = {
  slug?: string
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcomingTitle: string
  upcomingGames: GamecardProps[]
  upcomingHighlight: HighlightProps
  recommendedGames: GamecardProps[]
  recommendedTitle: string
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingTitle,
  upcomingGames,
  upcomingHighlight,
  recommendedTitle,
  recommendedGames,
  slug
}: GameTemplateProps) => (
  <Base>
    <NextSeo
      title={`${gameInfo.title} - UP! BT`}
      description={gameInfo.description}
      canonical={`https://wongames.willianjusten.com.br/game/${slug}`}
      openGraph={{
        url: `https://wongames.willianjusten.com.br/game/${slug}`,
        title: `${gameInfo.title} - UP! BT`,
        description: gameInfo.description,
        images: [
          {
            url: cover,
            alt: `${gameInfo.title}`
          }
        ]
      }}
    />
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
        <Divider />
      </S.SectionGameDetails>

      <Showcase
        title={upcomingTitle || 'Upcoming games'}
        games={upcomingGames}
        highlight={upcomingHighlight}
      />

      <Showcase
        title={recommendedTitle || 'You may like these games'}
        games={recommendedGames}
      />
    </S.Main>
  </Base>
)

export default Game
