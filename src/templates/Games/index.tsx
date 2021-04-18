import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import Gamecard, { GamecardProps } from 'components/Gamecard'
import { Grid } from 'components/Grid'
import ExploreSidebar, { ItemProps } from 'components/Sidebar'
import Base from 'templates/Base'
import * as S from './styles'

export type GamesTemplateProps = {
  games?: GamecardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems, games = [] }: GamesTemplateProps) => {
  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    return
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        <section>
          <Grid>
            {games.map((item) => (
              <Gamecard key={item.title} {...item} />
            ))}
          </Grid>

          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Show More</p>
            <ArrowDown size={35} />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
