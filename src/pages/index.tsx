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

  const { data } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

  return {
    props: {
      revalidate: 60,
      banners: data.banners.map((banner) => ({
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

// {
//   img: 'https://source.unsplash.com/user/willianjusten/1042x580',
//   title: 'Defy death 1',
//   subtitle: '<p>Play the new <strong>CrashLands</strong> season',
//   buttonLabel: 'Buy now',
//   buttonLink: '/games/defy-death',
//   ribbon: 'Bestselling'
// },

// "image": {
//   "url": "/uploads/Screenshot_2020_11_10_Control_Panel_Digital_Ocean_e955c2047b.png"
// },
// "title": "New Test Banner",
// "subtitle": "Testing",
// "button": {
//   "label": "Buy now",
//   "link": "/cart"
// },
// "ribbon": {
//   "text": "Promotion",
//   "color": "primary",
//   "size": "normal"
// }

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
