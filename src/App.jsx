import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
// import Async from './components/async'
import './styles/App.css'
import { useState } from 'react'

// 🔥 TanStack Query

// 서버 상태를 관리하기 위한 라이브러리
// 캐싱, 동기화, 무효화
// 간편하게 작성하고 유지보수성을 높임

// 주요 기능 : 데이터 캐싱, 자동 리페칭, 쿼리 무효화

// - useQuery : 데이터를 가져오기(쿼리 키와 비동기 함수(패칭 함수))
// - useMutation : 데이터를 생성, 수정, 삭제하는 등의 작업에 사용되는 훅([비동기 작업]을 쉽게 처리한다는 말 안에는 [작업이 완료된 후에 관련된 쿼리를 무효화]하는 과정이 포함)
// - invalidateQueries : 특정 쿼리를 무효화하여 데이터를 다시 패칭하게 하는 함수, 데이터가 항상 최신 상태로 유지, 새로운 할 일을 추가한 후 기존의 할 일 목록을 다시 가져오도록

// - 서버 상태(외부 API) vs 클라이언트 상태
// 클라이언트 상태는 UI 관련된 일시적인 데이터(예: 폼 입력값, 다크모드, 토글)를 의미
// 서버 상태는 서버에서 가져오는 데이터(예: API 응답), 캐싱, 동기화, 재검증(revalidate)

// 컴포넌트 내부에서 관리하는 state : 지역 state, props drilling
// 부분 전역, 전역상태 관리 state : useQuery, redux

const App = () => {
  const queryClient = useQueryClient()

  const [todoItem, setTodoItem] = useState('')

  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:4000/todos')
    return response.data
  }

  const addTodo = async (newTodo) => {
    await axios.post('http://localhost:4000/todos', newTodo)
  }

  const {
    data: todos,
    isPending,
    isError
  } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos
  })

  const { mutate } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      // alert("데이터 삽입이 성공했습니다.");
      queryClient.invalidateQueries(['todos'])
    }
  })

  if (isPending) <div>로딩중입니다...</div>
  if (isError) <div>데이터 조회 중 오류가 발생했습니다.</div>

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
