import { Story, Meta } from '@storybook/react/types-6-0'
import Sidebar, { SidebarProps } from '.'

import items from './mock'

export default {
  title: 'Sidebar',
  component: Sidebar,
  args: {
    items
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<SidebarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <Sidebar {...args} />
  </div>
)

export const WithInitialValues: Story<SidebarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <Sidebar
      {...args}
      initialValues={{ windows: true, sort_by: 'low-to-high' }}
    />
  </div>
)
