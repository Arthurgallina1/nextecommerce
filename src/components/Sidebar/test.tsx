import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import Sidebar from './index'
import itemsMock from './mock'

describe('Sidebar', () => {
  it('should render the headings', () => {
    renderWithTheme(<Sidebar items={itemsMock} onFilter={jest.fn} />)

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /system/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })

  it('should render inputs', () => {
    renderWithTheme(<Sidebar items={itemsMock} onFilter={jest.fn} />)

    expect(
      screen.getByRole('checkbox', { name: /under \$50/i })
    ).toBeInTheDocument()
  })

  it('should check initial values that are passed', () => {
    renderWithTheme(
      <Sidebar
        items={itemsMock}
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
      />
    )

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()

    expect(screen.getByRole('radio', { name: /low to high/i })).toBeChecked()
  })

  it('should return selecte items in onFilter', () => {
    const onFilter = jest.fn()

    renderWithTheme(
      <Sidebar
        items={itemsMock}
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
        onFilter={onFilter}
      />
    )

    expect(onFilter).toHaveBeenCalledWith({
      windows: true,
      sort_by: 'low-to-high'
    })

    userEvent.click(screen.getByRole('button', { name: /filter/i }))
  })
})
