import axios from 'axios'

// export const getTodos = async ({ signal }) => {
//   console.log('getTodos 호출')
//   const response = await axios.get('http://localhost:5000/todos', { signal })
//   return response.data
// }

// queryFn 은 매개변수로 QueryFunctionContext 이란 객체 받음
export const getTodos = async ({ queryFnContext }) => {
  const { queryKey, pageParam, signal, meta } = queryFnContext
  // queryKey: 배열형태의 쿼리키
  // pageParam: useInfiniteQuery 사용 시 getNextPageParam 실행 시 적용
  // signal: AbortSignal 을 의미 (네트워크 요청을 중간에 중단시킬 수 있는 장치)
  // meta: query에 대한 정보를 추가적으로 메모를 남길 수 있는 string 필드
  console.log('getTodos 호출')
  const response = await axios.get('http://localhost:5000/todos', { signal })

  return response.data
}

// queryFn 은 매개변수로 QueryFunctionContext 이란 객체를 받지 않고, 개별 필드를 직접 받음
// export const getTodos = async ({ queryKey, signal }) => {
//   // queryKey: 배열 형태의 쿼리키
//   // signal: AbortSignal 을 의미 (네트워크 요청을 중간에 중단시킬 수 있는 장치)
//   console.log('getTodos 호출')

//   const response = await axios.get('http://localhost:5000/todos', { signal })

//   return response.data
// }

export const getTodo = async (id) => {
  console.log('getTodo 호출!')
  const response = await axios.get(`http://localhost:5000/todos/${id}`)
  return response.data
}

export const addTodo = (newTodo) => {
  console.log('addTodo 호출')

  return axios.post('http://localhost:5000/todos', newTodo)
}
