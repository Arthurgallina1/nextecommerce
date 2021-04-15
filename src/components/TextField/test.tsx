import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Email } from '@styled-icons/material-outlined'
import { renderWithTheme } from 'utils/tests/helpers'

import TextField from '.'

describe('<TextField />', () => {
  it('Renders with Label', () => {
    renderWithTheme(<TextField label="Label" name="Label" />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('Renders without Label', () => {
    renderWithTheme(<TextField />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('Renders with placeholder', () => {
    renderWithTheme(<TextField placeholder="hey you" />)

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('Changes its value when typing', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField onInput={onInput} label="TextField" name="TextField" />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('Should render a no border when error is false', async () => {
    renderWithTheme(
      <TextField label="TextField" name="TextField" value="1234" />
    )
    expect(screen.getByDisplayValue('1234').parentElement).toHaveStyle({
      'box-shadow': ''
    })
  })

  it('Should render an icon', async () => {
    renderWithTheme(
      <TextField
        label="TextField"
        name="TextField"
        icon={<Email data-testid="icon" />}
      />
    )
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('Renders with error', () => {
    const { container } = renderWithTheme(
      <TextField
        icon={<Email data-testid="icon" />}
        label="TextField"
        name="TextField"
        error="Error message"
      />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Renders with Icon on the right side', () => {
    renderWithTheme(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    )

    expect(screen.getByTestId('icon').parentElement?.parentElement).toHaveStyle(
      {
        flexDirection: 'row-reverse'
      }
    )
  })

  it('Renders is correctly disabled ', () => {
    renderWithTheme(<TextField label="TextField" name="TextField" disabled />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('disabled', '')
  })

  it('Is accessible by tab', () => {
    renderWithTheme(<TextField label="TextField" name="TextField" />)

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })
})
