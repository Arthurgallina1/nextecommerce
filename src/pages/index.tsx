import Home from 'templates/Home'

export default function Index(props: any) {
  return <Home {...props} />
}

//generate static in build time
// export function getStaticProps() {
//   return {
//     props: {
//       heading: 'most popular'
//     }
//   }
// }

// geria via cada request
// export function getServerSideProps() {
//   return {
//     props: {
//       heading: 'ssr'
//     }
//   }
// }
