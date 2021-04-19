import GamesTemplate, { GamesTemplateProps } from 'templates/Games'
import filterItemMock from 'components/Sidebar/mock'
import { initializeApollo } from 'utils/apollo'
import { gql } from '@apollo/client'
import { cover } from 'polished'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: gql`
      query QueryGames {
        games {
          name
          slug
          cover {
            url
          }
          developers {
            name
          }
          price
        }
      }
    `
  })

  return {
    props: {
      revalidate: 60,
      games: data.games.map((game) => ({
        title: game.name,
        developer: game.developers[0].name,
        img: `http://localhost:1337/${game?.cover?.url}` || null,
        price: new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'USD'
        }).format(game.price)
      })),
      filterItems: filterItemMock
    }
  }
}

// title: 'Population Zero',
// developer: 'Rockstar Games',
// img: 'https://source.unsplash.com/user/willianjusten/300x140',
// price: 'R$ 235,00',
// promotionalPrice: 'R$ 215,00'
