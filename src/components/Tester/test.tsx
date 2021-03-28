import { render, screen } from '@testing-library/react'
import mockAxios from 'axios'
import { getPost, addPost } from '../../services/get'
import Tester from './index'
import { renderWithContext } from 'utils/tests/helpers'

type wrapperType = {
  children: React.ReactNode
}

describe('tests', () => {
  it('should render with context', () => {
    renderWithContext({ teste: 'parceiro' }, <Tester />)
    expect(
      screen.getByRole('heading', { name: /parceiro/i })
    ).toBeInTheDocument()
  })

  it('should test get using axios mock', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: ['oi'] })
    )
    const images = await getPost()
    expect(images).toEqual(['oi'])
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
  })

  it('should test post using axios mock', async () => {
    const post = {
      userId: 1,
      id: 1,
      title: '231829u3812',
      body: '38912u3'
    }
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({ data: post }))
    const images = await addPost(post)
    expect(images).toEqual(post)
    // expect(mockAxios.get).toHaveBeenCalledTimes(1)
  })
})
