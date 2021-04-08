import { Story, Meta } from '@storybook/react/types-6-0'
import Gallery, { GalleryProps } from '.'
import itemsMock from './mock'

export default {
  title: 'Game/Gallery',
  component: Gallery,
  args: {
    items: itemsMock
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Basic: Story<GalleryProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Gallery {...args} />
  </div>
)
