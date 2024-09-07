import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { memo, useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { addTodo, getTodos } from '../api/todoList'

function Main() {
  const navigate = useNavigate()

  const {
    isPending,
    isFetching,
    data: todos
  } = useQuery({
    // queryFn
    queryKey: ['todos'],
    // queryFn: getTodos

    // 쿼리 요청이 진행 중일 때 사용자가 페이지를 벗어나거나 쿼리가 취소되면 axios 요청이 자동으로 취소
    queryFn: ({ signal }) =>
      axios.get('/todos', {
        // Pass the signal to `axios`
        signal
      })
  })

  // 취소 예시
  // const { data, error } = useQuery('todos', ({ signal }) => axios.get('/todos', { signal }))

  // example: <div onClick={(event) => {}}
  // console.log("isPending, isFetching:", isPending, isFetching);
  console.log('todos: ', todos) // undefined -> [{}, {}, {}]

  const queryClient = useQueryClient()

  const addMutation = useMutation({
    mutationFn: addTodo,
    // onSuccess: () => {
    //   queryClient.invalidateQueries(["todos"]);
    // },

    // 🌞 Query Cancellation : 낙관적 업데이트 시
    onMutate: async (newTodo) => {
      console.log('onMutate 호출')
      await queryClient.cancelQueries({ queryKey: ['todos'] })

      const previousTodos = queryClient.getQueryData(['todos'])

      queryClient.setQueryData(['todos'], (old) => [...old, newTodo])

      return { previousTodos }
    },
    // 🌞 에러 시 원복 처리
    onError: (err, newTodo, context) => {
      console.log('onError')
      console.log('context:', context)
      // 에러가 나면 쿼리데이터를 다시 셋하고 원래 가지고 있던 previousTodos로 원복
      queryClient.setQueryData(['todos'], context.previousTodos)
    },
    // 🌞invalidateQueries 처리로 무효화하고 새로운 데이터를 가져오게 강제함
    onSettled: () => {
      console.log('onSettled')
      queryClient.invalidateQueries({ queryKey: ['todos'] })
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

  const cancelQuery = () => {
    queryClient.cancelQueries(['todos'])
  }

  if (isPending) {
    console.log('Main return Loading')
    return <h1>Loading...</h1>
  }

  return (
    <div>
      {console.log('Main return UI')}
      <h1>투두리스트 : shared</h1>

      <button style={{ display: 'block' }} onClick={cancelQuery}>
        todos 쿼리취소
      </button>
      <Link to={'/empty'}>빈 화면으로 이동</Link>
      <form onSubmit={handleSubmit} style={{ marginTop: 10 }}>
        <input value={content} onChange={handleChange} />
        <button>투두 추가</button>
      </form>
      <ul>
        {todos?.map((todo, idx) => (
          //  todo.id가 없을 경우 idx 사용
          <li id={todo.id} key={todo.id || todo.id + idx}>
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
