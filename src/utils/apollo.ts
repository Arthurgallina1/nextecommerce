import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client'
import { useMemo } from 'react'
import apolloCache from './apolloCache'

let apolloClient: ApolloClient<NormalizedCacheObject | null>

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined', //hora ssr, hora client
    link: new HttpLink({ uri: 'http://localhost:1337/graphql' }),
    cache: apolloCache
  })
}

export function initializeApollo(initialState = null) {
  //verify if apolloClient already exists
  const apolloClientGlobal = apolloClient ?? createApolloClient()

  //recover cache data
  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  }

  //inicializa no SSR com cache limpo
  if (typeof window === 'undefined') return apolloClientGlobal

  apolloClient = apolloClient ?? apolloClientGlobal

  return apolloClient
}

//memoiza para só mudar qnd muda initial state
export function useApollo(initialState = null) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
