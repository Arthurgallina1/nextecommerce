import { render, screen } from '@testing-library/react'
import Tester from './index'
import { renderWithContext } from 'utils/tests/helpers'

type wrapperType = {
  children: React.ReactNode
}

test('olar', () => {
  renderWithContext({ teste: 'parceiro' }, <Tester />)
  expect(screen.getByRole('heading', { name: /parceiro/i })).toBeInTheDocument()
})

// test('should use custom step when incrementing', () => {
//   const wrapper = ({ children }: wrapperType) => (
//     <CounterStepProvider step={2}>{children}</CounterStepProvider>
//   )
//   const { result } = renderHook(() => useCounter(), { wrapper })
//   act(() => {
//     result.current.increment()
//   })
//   expect(result.current.count).toBe(2)
// })
