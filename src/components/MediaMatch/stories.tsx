import { Story, Meta } from '@storybook/react/types-6-0'
import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Desktop: Story = () => (
  <MediaMatch greaterThan="medium">Only on desktop</MediaMatch>
)
export const Mobile: Story = () => (
  <MediaMatch lessThan="medium">Only on Mobile</MediaMatch>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
