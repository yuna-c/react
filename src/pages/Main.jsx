import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { memo } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { addTodo, getTodos } from '../api/todoList'

function Main() {
  const navigate = useNavigate()

  const {
    isLoading, // 첫 로딩 중일 때 true
    isError, // 에러 발생 시 true
    isFetching, // 데이터를 refetching(재요청) 중일 때 true
    data: todos
  } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
    select: (todos) => {
      return todos.map((todo) => {
        return { ...todo, test: 1 }
      })
    }
  })
  // 상태 출력
  console.log('isLoading, isError:', isLoading, isError)
  console.log('todos: ', todos) // undefined일 수 있음, 데이터가 있으면 [{}, {}, {}] 형식
  console.log('isFetching: ', isFetching) // 데이터를 새로 가져오는 중인지 여부

  const queryClient = useQueryClient()

  const addMutation = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(['todos'])
    }
  })
  console.log('==========================================================')
  console.log('todos=>', todos)
  console.log('==========================================================')
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

  if (isError) {
    console.log('Error')
    return <h1>isError...</h1>
  }

  return (
    <div>
      {console.log('Main return UI')}
      <h1>투두리스트</h1>

      <button>
        <Link to={'/empty'}>빈 화면으로 이동</Link>
      </button>

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
