import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/Bannerslider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: bannersMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: bannersMock,
      upcomingGames: bannersMock,
      upcomingHighligth: highlightMock,
      freeGames: bannersMock,
      upcomingMoreGames: bannersMock,
      freeHighligth: highlightMock
    }
  }
}

// export function getServerSideProps() {
//   return {
//     props: {
//       heading: 'most popular'
//     }
//   }
// }
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
