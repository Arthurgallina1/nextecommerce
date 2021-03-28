import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Checkbox from './index'

describe('Checkbox', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Checkbox label="checkbox-label" labelFor="check" />
    )

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/checkbox-label/i)).toBeInTheDocument()
    expect(screen.getByText(/checkbox-label/i)).toHaveAttribute('for', 'check')
  })
})
