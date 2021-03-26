import { Story, Meta } from '@storybook/react/types-6-0'
import Bannerslider, { BannerSliderProps } from '.'

const items = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x582',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x581',
    title: 'Defy death 3',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
]

export default {
  title: 'Bannerslider',
  component: Bannerslider,
  args: { items },
  parameters: {
    layour: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: Story<BannerSliderProps> = (args) => (
  <div>
    <Bannerslider {...args} />
  </div>
)
