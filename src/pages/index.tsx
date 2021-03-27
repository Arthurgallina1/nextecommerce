import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/Bannerslider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

//generate static in build time
// export function getServerSideProps() {
//   return {
//     props: {
//       heading: 'most popular'
//     }
//   }
// }

// geria via cada request
export function getStaticProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: bannersMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: bannersMock,
      upcommingGames: bannersMock,
      upcommingHighligth: highlightMock,
      freeGames: bannersMock,
      upcommingMoreGames: bannersMock,
      freeHighligth: highlightMock
    }
  }
}
