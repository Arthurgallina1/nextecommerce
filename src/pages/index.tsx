import { gql, useQuery } from '@apollo/client'

import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/Bannerslider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  const { data, loading, error } = useQuery(gql`
    query getGames {
      games {
        name
      }
    }
  `)

  if (loading) return <p style={{ color: 'white' }}>loading</p>

  if (error) return <p>{error}</p>

  if (data) return <p>{JSON.stringify(data, null, 2)}</p>

  return <Home {...props} />
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
export function getStaticProps() {
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
