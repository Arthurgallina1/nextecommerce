import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
  })
  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />)
    // selecionar menu
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })
    //ver se ta escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
    // clicar no abrir
    fireEvent.click(screen.getByLabelText(/open menu/i))
    // ver se abriu
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    //clicar no fechar e verificar se fechou
    fireEvent.click(screen.getByLabelText(/close menu/i))
    // ver se abriu
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })
})
