import axios from 'axios'

// 할 일 목록을 가져오는 함수
export const getTodos = async () => {
  try {
    const response = await axios.get('http://localhost:5000/todos')
    return response.data
  } catch (error) {
    console.error('에러', error)
    throw error
  }
}

// 특정 할 일을 가져오는 함수
export const getTodo = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5000/todos/${id}`)
    return response.data
  } catch (error) {
    console.error('에러', error)
    throw error
  }
}

// 할 일을 추가하는 함수
export const addTodo = async (newTodo) => {
  try {
    return await axios.post('http://localhost:5000/todos', newTodo)
  } catch (error) {
    console.error('에러', error)
    throw error
  }
}

// // 모든 사용자 목록을 가져오는 함수 (주소 포함)
// export const fetchUsers = async () => {
//   try {
//     const response = await axios.get('http://localhost:5000/users')
//     return response.data // users 배열을 반환 (각 사용자 정보에 주소 포함)
//   } catch (error) {
//     console.error('에러', error)
//     throw error
//   }
// }

// // 특정 사용자를 가져오는 함수 (주소 포함)
// export const fetchUser = async (id) => {
//   try {
//     const response = await axios.get(`http://localhost:5000/users/${id}`)
//     return response.data // 특정 사용자 정보 반환 (주소 포함)
//   } catch (error) {
//     console.error('에러', error)
//     throw error
//   }
// }

// 모든 사용자 목록을 가져오는 함수
export const fetchUsers = async () => {
  try {
    const response = await axios.get('http://localhost:5000/users')
    return response.data
  } catch (error) {
    console.error('Error fetching users:', error)
    throw error
  }
}

// 특정 사용자 정보를 가져오는 함수
export const fetchUser = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5000/users/${id}`)
    return response.data
  } catch (error) {
    console.error(`Error fetching user with ID ${id}:`, error)
    throw error
  }
}

// 이메일로 특정 사용자를 가져오는 함수 (주소 포함)
export const getUserByEmail = async ({ queryKey }) => {
  const email = queryKey[1] // email from queryKey
  try {
    const response = await axios.get(`http://localhost:5000/users?email=${email}`)
    return response.data[0] // assuming response is an array, take first user
  } catch (error) {
    console.error('에러', error)
    throw error
  }
}

// 프로젝트를 가져오는 함수
export const getProjectsByUser = async ({ queryKey }) => {
  const userId = queryKey[1] // userId from queryKey
  try {
    const response = await axios.get(`http://localhost:5000/projects?userId=${userId}`)
    return response.data // return user's projects
  } catch (error) {
    console.error('에러', error)
    throw error
  }
}
