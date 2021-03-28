import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { UserContext } from 'utils/tests/helpers'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{ teste: '3' }}>
        <Head>
          <title>Power House E-Commerce</title>
          <link rel="shortcut icon" href="/img/man.svg" />
          <link rel="apple-touch-icon" href="/img/man.svg" />
          <meta name="description" content="Next and TS Boilerplate" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </UserContext.Provider>
    </ThemeProvider>
  )
}

export default MyApp
