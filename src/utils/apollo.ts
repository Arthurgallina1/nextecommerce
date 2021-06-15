import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { useMemo } from 'react'
import apolloCache from './apolloCache'
import { Session } from 'next-auth'

let apolloClient: ApolloClient<NormalizedCacheObject | null>

function createApolloClient(session?: Session | null) {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`
  })

  const authLink = setContext((_, { headers, session: clientSession }) => {
    const jwt = session?.jwt || clientSession?.jwt || ''
    const authorization = jwt ? `Bearer ${jwt}` : ''
    return { headers: { ...headers, authorization } }
  })

  return new ApolloClient({
    ssrMode: typeof window === 'undefined', //hora ssr, hora client
    link: authLink.concat(httpLink),
    cache: apolloCache
  })
}

export function initializeApollo(
  initialState = null,
  session?: Session | null
) {
  //verify if apolloClient already exists
  const apolloClientGlobal = apolloClient ?? createApolloClient(session)

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
export function useApollo(initialState = null, session?: Session) {
  const store = useMemo(() => initializeApollo(initialState, session), [
    initialState,
    session
  ])
  return store
}
