import { gql } from '@apollo/client'
import { GameFragment } from 'graphql/fragments/game'

export const QUERY_GAMES = gql`
  query QueryGames($limit: Int!) {
    games(limit: $limit) {
      ...GameFragment
    }
  }

  ${GameFragment}
`

export const QUERY_GAME_BY_SLUG = gql`
  query QueryGameBySlug($slug: String) {
    games(where: { slug: $slug }) {
      name
      short_description
      description
      price
      rating
      release_date
      categories {
        name
      }
      gallery {
        src: url
        label: alternativeText
      }
      cover {
        src: url
      }
      developers {
        name
      }
      publisher {
        name
      }
      platforms {
        name
      }
    }
  }
`
