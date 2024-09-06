import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { memo } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { addTodo, getTodos } from '../api/todoList'

function Main() {
  const navigate = useNavigate()

  const {
    isLoading,
    isError,
    data: todos
  } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos
  })
  // console.log("isLoading, isError:", isLoading, isError);
  console.log('todos: ', todos) // undefined -> [{}, {}, {}]

  const queryClient = useQueryClient()

  const addMutation = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(['todos'])
    }
  })

  const [content, setContent] = useState('')

  const handleChange = (e) => {
    setContent(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    addMutation.mutate({ content })
  }

  if (isLoading) {
    console.log('Main return Loading')
    return <h1>Loading...</h1>
  }

  return (
    <div>
      {console.log('Main return UI')}
      <h1>투두리스트</h1>

      <Link to={'/empty'}>빈 화면으로 이동</Link>
      <form onSubmit={handleSubmit} style={{ marginTop: 10 }}>
        <input value={content} onChange={handleChange} />
        <button>투두 추가</button>
      </form>
      <ul>
        {todos.map((todo, idx) => (
          <li key={todo.id}>
            <div style={{ width: 300, display: 'flex', gap: 20 }}>
              <span>
                {idx}: {todo.content}
              </span>
              <button onClick={() => navigate(`/${todo.id}`)}>상세보기</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default memo(Main)
