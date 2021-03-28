import axios from 'axios'

export const getPost = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/todos/1'
  )

  return response.data
}

export const addPost = async (post) => {
  const response = await axios.post(
    'https://jsonplaceholder.typicode.com/posts',
    post
  )

  return response.data
}
