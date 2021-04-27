import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'
import { concatPagination } from '@apollo/client/utilities'
import { useMemo } from 'react'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined', //hora ssr, hora client
    link: new HttpLink({ uri: 'http://localhost:1337/graphql' }),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            games: concatPagination()
          }
        }
      }
    })
  })
}

export function initializeApollo(initialState = {}) {
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
export function useApollo(initialState = {}) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
