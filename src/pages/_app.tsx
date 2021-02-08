import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Adv Boiler</title>
        <link rel="shortcut icon" href="/public/favicon.ico" />
        <link rel="apple-touch-icon" href="/public/favicon.ico" />
        <meta name="description" content="Next and TS Boilerplate" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
