import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Adv Boiler</title>
        <link rel="shortcut icon" href="/img/man.svg" />
        <link rel="apple-touch-icon" href="/img/man.svg" />
        <meta name="description" content="Next and TS Boilerplate" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
