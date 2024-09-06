import axiosInstance from './api/api'
import './styles/App.css'
import { useEffect, useState } from 'react'

// https://axios-http.com/kr/docs/req_config
// axios.get(url[, config]) : GET(url은 매개변수, 대괄호([])
// axios.post(url[, data[, config]]) : POST : 서버에 데이터를 추가할 때 사용, body
// axios.delete(url[, config]) : DELETE는 저장되어 있는 데이터를 삭제
// axios.patch(url[, data[, config]]) : Patch 업데이트

// 구형 브라우저 지원 : axios
// 신형 브라우저 지원 : fetch

//  404 => json 서버 꺼짐

const App = () => {
  // 🔥 todo init 데이터, newTodo input 관리용
  const [todos, setTodos] = useState(null)
  const [todo, setTodo] = useState({ title: '' })

  // 🔥 axios patch에서 사용할 id, 수정값의 state를 추가
  const [targetId, setTargetId] = useState(null)
  const [editTodo, setEditTodo] = useState({ title: '' })

  // 🔥 axios get
  const fetchTodos = async (todo) => {
    try {
      const { data } = await axiosInstance.get('/todos', todo)
      setTodos(data)
    } catch (error) {
      console.error(
        `%c할 일 목록을 가져오는 중 오류 발생 : %c${error}`,
        'color: #f0637b;',
        'color: #f0637b; font-weight: bold;'
      )
      // 🔥 에러 핸들링
      if (error.response) {
        // 서버가 4xx, 5xx 응답을 반환했을 때
        console.error('서버 오류:', error.response.data)
        console.error('상태 코드:', error.response.status)
        console.error('헤더:', error.response.headers)
      } else if (error.request) {
        // 요청이 전송되었으나 응답을 받지 못한 경우
        console.error('응답 없음:', error.request)
      } else {
        // 요청 설정 중에 발생한 기타 오류
        console.error('요청 오류:', error.message)
      }
    }
  }

  // 🔥 axios post
  const postTodos = async (todo) => {
    try {
      const { data } = await axiosInstance.post('/todos', todo)
      console.log('data =>', data)

      setTodos([...todos, data]) // 배열로 펼쳐서 리랜더링
      setTodo({ title: '' })
    } catch (error) {
      console.error(
        `%c할 일을 추가하는 중 오류 발생 : %c${error}`,
        'color: #f0637b;',
        'color: #f0637b; font-weight: bold;'
      )
    }
  }

  // 🔥 axios delete
  const deleteTodos = async (id) => {
    try {
      await axiosInstance.delete(`/todos/${id}`)
      setTodos(todos.filter((todo) => todo.id !== id))
    } catch (error) {
      console.error(
        `%c할 일을 제거하는 중 오류 발생 : %c${error}`,
        'color: #f0637b;',
        'color: #f0637b; font-weight: bold;'
      )
    }
  }

  // 🔥 axios patch
  const patchTodos = async (targetId, editTodo) => {
    console.log('Todo ID =>', targetId, 'Edit Todo =>', editTodo)
    console.log('API URL:', `http://localhost:4000/todos/${targetId}`)

    try {
      await axiosInstance.patch(`/todos/${targetId}`, editTodo) // targetId가 어떻게 바뀔 것인지

      // 수정된 데이터를 todos 배열에 반영하여 리렌더링 유도
      const newTodos = todos.map((todo) => (todo.id === targetId ? { ...todo, title: editTodo.title } : todo))

      // 리랜더링 후 상태를 초기화
      setTodos(newTodos)
      setEditTodo({ title: '' })
      setTargetId(null)
    } catch (error) {
      console.error(
        `%c할 일을 수정하는 중 오류 발생 : %c${error}`,
        'color: #f0637b;',
        'color: #f0637b; font-weight: bold;'
      )
    }
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  // 🔥 fetch : JSON.stringify를 '직접' body에 추가
  // await fetch("http://localhost:4000/todos", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(todo),
  // });

  // console.log('todos=> ', todos)

  return (
    <>
      <h1>axios CRUD</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          postTodos(todo)
        }}
      >
        <input
          type="text"
          value={todo.title}
          onChange={(e) => {
            const { value } = e.target
            setTodo({ ...todo, title: value })
          }}
        />
        <button>추가하기</button>

        <fieldset>
          <input
            type="text"
            placeholder="수정하고싶은 Todo ID"
            value={targetId || ''}
            onChange={(e) => {
              setTargetId(e.target.value)
            }}
          />
          <input
            type="text"
            placeholder="수정값 입력"
            value={editTodo.title}
            onChange={(e) => {
              setEditTodo({ ...editTodo, title: e.target.value })
            }}
          />
          <button type="button" onClick={() => patchTodos(targetId, editTodo)}>
            수정하기
          </button>
        </fieldset>
      </form>
      <div>
        {todos?.map((todo) => (
          <div key={todo.id}>
            {todo.title}
            <button type="button" onClick={() => deleteTodos(todo.id)}>
              삭제하기
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
