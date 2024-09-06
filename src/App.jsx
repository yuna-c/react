import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
// import Async from './components/async'
import './styles/App.css'
import { useState } from 'react'

const App = () => {
  // 무효화
  const queryClient = useQueryClient()

  const [todoItem, setTodoItem] = useState('')

  // Fetch Todos function
  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:4000/todos')
    return response.data
  }

  // Add Todo function
  const addTodo = async (newTodo) => {
    await axios.post('http://localhost:4000/todos', newTodo)
  }

  // useQuery to fetch todos
  const {
    data: todos,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos
  })

  // useMutation to add new todo
  const { mutate } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      // Invalidate the 'todos' query to refresh the list
      // alert("데이터 삽입이 성공했습니다.");
      queryClient.invalidateQueries(['todos'])
    }
  })

  // Handle loading and error states
  if (isLoading) return <div>로딩중입니다...</div>
  if (isError) return <div>데이터 조회 중 오류가 발생했습니다.</div>
  console.log(`data=>`, todos)

  return (
    <div>
      <h3>TanStack Query</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const newTodoObj = { title: todoItem, isDone: false }
          // useMutation 로직 필요
          mutate(newTodoObj)
        }}
      >
        <input type="text" value={todoItem} onChange={(e) => setTodoItem(e.target.value)} />
        <button>추가</button>
      </form>
      <ul>
        {/* Display todo list */}
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: 'aliceblue'
              }}
            >
              <h4>{todo.title}</h4>
              <p>{todo.isDone ? 'Done' : 'Not Done'}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
