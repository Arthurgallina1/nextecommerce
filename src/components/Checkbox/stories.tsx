import { Story, Meta } from '@storybook/react/types-6-0'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  args: {
    label: 'label'
  },
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Basic: Story<CheckboxProps> = (args) => <Checkbox {...args} />
