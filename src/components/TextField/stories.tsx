import { Story, Meta } from '@storybook/react/types-6-0'
import TextField, { TextFieldProps } from '.'
import { Email } from '@styled-icons/material-outlined'

export default {
  title: 'form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    name: 'email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com',
    icon: <Email />,
    iconPosition: 'left',
    disabled: false
  },
  argTypes: {
    onInput: { action: 'changed' }
  }
} as Meta

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

export const withError: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

withError.args = {
  error: 'Ops...something is wrong'
}
