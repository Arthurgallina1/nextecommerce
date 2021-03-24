import { Story, Meta } from '@storybook/react/types-6-0'
import Gamecard, { GamecardProps } from '.'

export default {
  title: 'Gamecard',
  component: Gamecard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar games',
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    price: 'R$ 235,00'
  }
} as Meta

export const Basic: Story<GamecardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <Gamecard {...args} />
  </div>
)
