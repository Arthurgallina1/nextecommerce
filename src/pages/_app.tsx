import NextNprogress from 'nextjs-progressbar'
import { ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import { CartProvider } from 'hooks/use-cart'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { useApollo } from 'utils/apollo'

function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <Head>
            <title>Power House E-Commerce</title>
            <link rel="shortcut icon" href="/img/man.svg" />
            <link rel="apple-touch-icon" href="/img/man.svg" />
            <meta name="description" content="Ultra perfomance E-commerce" />
            <link rel="manifest" href="/manifest.json" />
          </Head>
          <GlobalStyles />
          <NextNprogress
            color="#F231A5"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
          />
          <Component {...pageProps} />
        </CartProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
