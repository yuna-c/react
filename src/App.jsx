import axios from 'axios'
// import Async from './components/async'
import './styles/App.css'
import { useQuery } from '@tanstack/react-query'

// NOTE - TanStack Query

// 서버 상태를 관리하기 위한 라이브러리
// 캐싱, 동기화, 무효화
// 간편하게 작성하고 유지보수성을 높임

// 주요 기능 : 데이터 캐싱, 자동 리페칭, 쿼리 무효화

// NOTE - useQuery : 데이터를 가져오기(쿼리 키와 비동기 함수(패칭 함수))

const App = () => {
  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:4000/todos')
    return response.data
  }

  const {
    data: todos,
    isPending,
    isError
  } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos
  })

  if (isPending) {
    return <div>로딩중입니다...</div>
  }

  if (isError) {
    return <div>데이터 조회 중 오류가 발생했습니다.</div>
  }

  return (
    <div>
      <h3>TanStack Query</h3>
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
