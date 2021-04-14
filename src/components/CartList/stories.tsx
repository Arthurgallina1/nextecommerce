import { Story, Meta } from '@storybook/react/types-6-0'
import CartList, { CartListProps } from '.'
import cartMock from './mock'

export default {
  title: 'Cart/CartList',
  component: CartList,
  args: {
    items: cartMock,
    total: 'R$ 250,00'
  },
  argTypes: {
    items: {
      type: ''
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Basic: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
)
