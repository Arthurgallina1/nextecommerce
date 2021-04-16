import { Story, Meta } from '@storybook/react/types-6-0'
import OrdersList from '.'
import itemsMock from './mock'

export default {
  title: 'Profile/OrdersList',
  component: OrdersList,
  args: {
    items: itemsMock
  }
} as Meta

export const Basic: Story = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <OrdersList {...args} />
  </div>
)
