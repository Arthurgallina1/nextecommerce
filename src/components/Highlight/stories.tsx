import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead is back',
    backgroundImage: '/img/red-dead-img.jpg',
    subtitle: 'Come see Jonhs new adventures',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2'
  }
} as Meta

export const Basic: Story<HighlightProps> = (args) => <Highlight {...args} />
