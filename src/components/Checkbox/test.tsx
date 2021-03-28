import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'

import Checkbox from './index'

describe('Checkbox', () => {
  it('should render the heading', () => {
    renderWithTheme(<Checkbox label="checkbox-label" labelFor="check" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/checkbox-label/i)).toBeInTheDocument()
    expect(screen.getByText(/checkbox-label/i)).toHaveAttribute('for', 'check')
  })

  it('should render without label', () => {
    renderWithTheme(<Checkbox />)

    expect(screen.queryByLabelText('checkbox')).not.toBeInTheDocument()
  })

  it('should render a black label', () => {
    renderWithTheme(<Checkbox label={'label'} labelFor="check" />)
    expect(screen.getByText(/label/i)).toHaveStyle({ color: '#030517' })
  })

  it('should render a white label', () => {
    renderWithTheme(<Checkbox label={'label'} labelFor="check" color="white" />)
    expect(screen.getByText(/label/i)).toHaveStyle({ color: '#FAFAFA' })
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<Checkbox label="Checkbox" onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
  })
})
