import { Story, Meta } from '@storybook/react/types-6-0'
import Gamecard, { GamecardProps } from '.'

export default {
  title: 'Gamecard',
  component: Gamecard,
  args: {
    slug: 'population-zero',
    title: 'Population Zero',
    developer: 'Rockstar games',
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    price: 235.0,
    promotionalPrice: 215.0
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
  }
} as Meta

export const Basic: Story<GamecardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <Gamecard {...args} />
  </div>
)

export const WithRibbon: Story<GamecardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <Gamecard {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'small',
  ribbonColor: 'primary'
}
