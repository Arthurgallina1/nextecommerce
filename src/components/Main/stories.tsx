import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'This title is default for every story!!',
    description: 'This description is default for every story!!'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'New React Valeus for storybook',
  description: 'For this story only'
}

export const Default: Story = (args) => <Main {...args} />
Default.args = {
  title: 'This is a default '
}
