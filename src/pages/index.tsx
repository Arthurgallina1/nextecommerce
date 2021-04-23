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
    data: { banners, newGames, upcomingGames, freeGames, sections }
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
      newGamesTitle: sections?.newGames?.title,
      mostPopularHighlight: {
        title: sections?.popularGames?.highlight?.title,
        backgroundImage: `http://localhost:1337${sections?.popularGames?.highlight?.background?.url}`,
        floatImage: `http://localhost:1337${sections?.popularGames?.highlight?.floatImage?.url}`,
        subtitle: sections?.popularGames?.highlight?.subtitle,
        buttonLabel: sections?.popularGames?.highlight?.buttonLabel,
        buttonLink: sections?.popularGames?.highlight?.buttonLink,
        alignment: sections?.popularGames?.highlight?.alignment
      },
      mostPopularGames: sections!.popularGames!.games.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      })),
      mostPopularGamesTitle: sections?.popularGames?.title,
      upcomingGames: upcomingGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      })),
      upcomingHighligth: {
        title: sections?.upcomingGames?.highlight?.title,
        backgroundImage: `http://localhost:1337${sections?.upcomingGames?.highlight?.background?.url}`,
        floatImage: `http://localhost:1337${sections?.upcomingGames?.highlight?.floatImage?.url}`,
        subtitle: sections?.upcomingGames?.highlight?.subtitle,
        buttonLabel: sections?.upcomingGames?.highlight?.buttonLabel,
        buttonLink: sections?.upcomingGames?.highlight?.buttonLink,
        alignment: sections?.upcomingGames?.highlight?.alignment
      },
      upcomingGamesTitle: sections?.upcomingGames?.title,
      freeGames: freeGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      })),
      freeGamesTitle: sections?.freeGames?.title,
      freeHighligth: {
        title: sections?.freeGames?.highlight?.title,
        backgroundImage: `http://localhost:1337${sections?.freeGames?.highlight?.background?.url}`,
        floatImage: `http://localhost:1337${sections?.freeGames?.highlight?.floatImage?.url}`,
        subtitle: sections?.freeGames?.highlight?.subtitle,
        buttonLabel: sections?.freeGames?.highlight?.buttonLabel,
        buttonLink: sections?.freeGames?.highlight?.buttonLink,
        alignment: sections?.freeGames?.highlight?.alignment
      }
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
