import axios from 'axios'

export const getTodos = async () => {
  try {
    console.log('getTodos 호출')
    const response = await axios.get(`http://localhost:5000/todos`)
    return response.data
  } catch (error) {
    console.error('에러', error)
    throw error
  }
}

export const getTodo = async (id) => {
  try {
    console.log('getTodo 호출')
    const response = await axios.get(`http://localhost:5000/todos/${id}`)
    return response.data
  } catch (error) {
    console.error('에러', error)
    throw error
  }
}

export const addTodo = (newTodo) => {
  try {
    console.lo
    console.log('addTodo 호출')
    return axios.post('http://localhost:5000/todos', newTodo)
  } catch (error) {
    console.error('에러', error)
    throw error
  }
}

export const getUserByEmail = async ({ queryKey }) => {
  const email = queryKey[1] // email from queryKey
  const response = await axios.get(`http://localhost:5000/users?email=${email}`)
  return response.data[0] // assuming response is an array, take first user
}

export const getProjectsByUser = async ({ queryKey }) => {
  const userId = queryKey[1] // userId from queryKey
  const response = await axios.get(`http://localhost:5000/projects?userId=${userId}`)
  return response.data // return user's projects
}
