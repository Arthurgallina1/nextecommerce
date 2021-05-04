import Home, { HomeTemplateProps } from 'templates/Home'
import { initializeApollo } from 'utils/apollo'
import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'
import { bannerMapper, gamesMapper, highlightMapper } from 'utils/mappers'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const TODAY = new Date().toISOString().slice(0, 10) // '2021-05-27'

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: { date: TODAY },
    fetchPolicy: 'no-cache' //garantir dado novo na geração do estático
  })

  return {
    revalidate: 60,
    props: {
      banners: bannerMapper(banners),
      newGames: gamesMapper(newGames),
      newGamesTitle: sections?.newGames?.title,
      mostPopularHighlight: highlightMapper(sections?.popularGames?.highlight),
      mostPopularGames: gamesMapper(sections!.popularGames!.games),
      mostPopularGamesTitle: sections?.popularGames?.title,
      upcomingGames: gamesMapper(upcomingGames),
      upcomingHighligth: highlightMapper(sections?.upcomingGames?.highlight),
      upcomingGamesTitle: sections?.upcomingGames?.title,
      freeGames: gamesMapper(freeGames),
      freeGamesTitle: sections?.freeGames?.title,
      freeHighligth: highlightMapper(sections?.freeGames?.highlight)
    }
  }
}

// getServerSideProps -> gera via SSR a cada request (não vai para o bundle do cliente)
// getInitialProps -> gera via ssr a cada request (vai para o cliente, faz hydrate do lado do cliente depois do 1o req)
// getStaticProps -> generate static in build time SSG
// export function getStaticProps() {
//   return {
//     props: {
//       banners: bannersMock,
//       newGames: bannersMock,
//       mostPopularHighlight: highlightMock,
//       mostPopularGames: bannersMock,
//       upcomingGames: bannersMock,
//       upcomingHighligth: highlightMock,
//       freeGames: bannersMock,
//       upcomingMoreGames: bannersMock,
//       freeHighligth: highlightMock
//     }
//   }
// }
