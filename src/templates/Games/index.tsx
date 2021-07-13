import { useRouter } from 'next/router'
import { ParsedUrlQueryInput } from 'querystring'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import { useQueryGames } from 'hooks/useQueryGames'
import Gamecard from 'components/Gamecard'
import { Grid } from 'components/Grid'
import ExploreSidebar, { ItemProps } from 'components/Sidebar'
import Base from 'templates/Base'
import { parseQueryStringToFilter, parseQueryStringToWhere } from 'utils/filter'
import * as S from './styles'
import Empty from 'components/Empty'
import { getImageUrl } from 'utils/getImageUrls'

export type GamesTemplateProps = {
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { push, query } = useRouter()

  const { data, loading, fetchMore } = useQueryGames({
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })

  if (!data) return <p>loading...</p>

  const { games, gamesConnection } = data

  const hasMoreGames = games.length < (gamesConnection?.values?.length || 0)

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/games',
      query: items
    })
    return
  }

  const handleShowMore = () => {
    fetchMore({
      variables: {
        limit: 15,
        start: data?.games.length
      }
    })
    return
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems
          })}
          items={filterItems}
          onFilter={handleFilter}
        />

        <section>
          {data?.games.length ? (
            <>
              <Grid>
                {data?.games.map((game) => (
                  <Gamecard
                    id={game.id}
                    key={game.slug}
                    title={game.name}
                    slug={game.slug}
                    developer={game.developers[0].name}
                    img={
                      'https://via.placeholder.com/150' ||
                      `${getImageUrl(game?.cover!.url)}`
                    }
                    price={game.price}
                  />
                ))}
              </Grid>
              {hasMoreGames && (
                <S.ShowMore>
                  {loading ? (
                    <S.ShowMoreLoading
                      src="/img/dots.svg"
                      alt="Loading more games..."
                    />
                  ) : (
                    <S.ShowMoreButton role="button" onClick={handleShowMore}>
                      <p>Show More</p>
                      <ArrowDown size={35} />
                    </S.ShowMoreButton>
                  )}
                </S.ShowMore>
              )}
            </>
          ) : (
            <Empty
              title="Ooops"
              description="We didn't find any games with this filter"
            />
          )}
        </section>
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
