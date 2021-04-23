import Home, { HomeTemplateProps } from 'templates/Home'
import highlightMock from 'components/Highlight/mock'
import bannersMock from 'components/Bannerslider/mock'
import { initializeApollo } from 'utils/apollo'
import { QueryHome } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { banners, newGames, upcomingGames, freeGames }
  } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

  return {
    props: {
      revalidate: 60,
      banners: banners.map((banner) => ({
        img: `http://localhost:1337${banner.image?.url}`,
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button?.label,
        buttonLink: banner.button?.link,
        ...(banner.ribbon && {
          ribbon: banner.ribbon.text,
          ribbonColor: banner.ribbon.color,
          ribbonSize: banner.ribbon.size
        })
        //para garantir que o só vai passar coisas do ribbon se o ribbon exister
      })),
      newGames: newGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      })),
      mostPopularHighlight: highlightMock,
      mostPopularGames: bannersMock,
      upcomingGames: upcomingGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      })),
      upcomingHighligth: highlightMock,
      freeGames: freeGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      })),
      freeHighligth: highlightMock
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
