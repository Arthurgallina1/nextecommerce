import { Story, Meta } from '@storybook/react/types-6-0'
import Bannerslider, { BannerSliderProps } from '.'
import items from './mock'

export default {
  title: 'Bannerslider',
  component: Bannerslider,
  args: { items },
  parameters: {
    layour: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Basic: Story<BannerSliderProps> = (args) => (
  <div>
    <Bannerslider {...args} />
  </div>
)
