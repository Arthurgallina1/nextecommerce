import { Story, Meta } from '@storybook/react/types-6-0'
import Tester from '.'

export default {
  title: 'Tester',
  component: Tester
} as Meta

export const Basic: Story = () => <Tester />
