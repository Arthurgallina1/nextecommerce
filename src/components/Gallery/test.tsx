import 'match-media-mock'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import mockItems from './mock'
import Gallery from './index'

describe('Gallery', () => {
  it('should render thumbnails as buttons', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    ).toHaveAttribute('src', mockItems[0].src)
  })

  it('should handle open/close modal', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)
    // selecionar menu
    const modal = screen.getByLabelText('modal')
    //ver se ta escondido
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
    // clicar no abrir
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )
    // // ver se abriu
    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })

    // //clicar no fechar e verificar se fechou
    // fireEvent.click(screen.getByLabelText(/close menu/i))
    // // ver se abriu
    // expect(modal.getAttribute('aria-hidden')).toBe('true')
    // expect(modal).toHaveStyle({ opacity: 0 })
  })
})
