import GamesTemplate, { GamesTemplateProps } from 'templates/Games'
import filterItemMock from 'components/Sidebar/mock'
import gamesMock from 'components/GameCardSlider/mock'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      games: gamesMock,
      filterItems: filterItemMock
    }
  }
}
