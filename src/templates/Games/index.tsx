import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import { useQueryGames } from 'hooks/useQueryGames'
import Gamecard from 'components/Gamecard'
import { Grid } from 'components/Grid'
import ExploreSidebar, { ItemProps } from 'components/Sidebar'
import Base from 'templates/Base'
import * as S from './styles'

export type GamesTemplateProps = {
  // games?: GamecardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { data, loading, fetchMore } = useQueryGames({
    variables: {
      limit: 15
    }
  })

  const handleFilter = () => {
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
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        {loading ? (
          <h3 style={{ color: 'white' }}>loading</h3>
        ) : (
          <section>
            <Grid>
              {data?.games.map((game) => (
                <Gamecard
                  key={game.slug}
                  title={game.name}
                  slug={game.slug}
                  developer={game.developers[0].name}
                  img={
                    'https://via.placeholder.com/150' ||
                    `http://localhost:1337${game?.cover!.url}`
                  }
                  price={game.price}
                />
              ))}
            </Grid>

            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Show More</p>
              <ArrowDown size={35} />
            </S.ShowMore>
          </section>
        )}
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
