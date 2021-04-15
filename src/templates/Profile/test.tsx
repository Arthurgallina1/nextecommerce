import { render, screen } from '@testing-library/react'

import Profile from './index'

describe('Profile', () => {
  it('should render the heading', () => {
    const { container } = render(<Profile />)
  })
})
