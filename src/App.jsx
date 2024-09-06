import axiosInstance from './api/api'
import './styles/App.css'
import { useEffect, useState } from 'react'

// https://axios-http.com/kr/docs/req_config
// axios.get(url[, config]) : GET(url은 매개변수, 대괄호([])
// axios.post(url[, data[, config]]) : POST : 서버에 데이터를 추가할 때 사용, body
// axios.delete(url[, config]) : DELETE는 저장되어 있는 데이터를 삭제
// axios.patch(url[, data[, config]]) : Patch 업데이트

const App = () => {
  // const apiKey = import.meta.env.VITE_API_KEY
  // const server = import.meta.env.VITE_EXAMPLE_SERVER_URL
  // const secret = import.meta.env.VITE_SECRET_KEY
  // console.log('API Key:', apiKey)
  // console.log('SERVER Url:', server)
  // console.log('SECRET Key:', secret)

  // todo init
  const [todos, setTodos] = useState([])

  // newTodo
  const [todo, setTodo] = useState({
    title: ''
  })

  // 🔥 axios patch에서 사용할 id, 수정값의 state를 추가
  const [targetId, setTargetId] = useState(null)
  const [editTodo, setEditTodo] = useState({
    title: ''
  })

  // 🔥 axios get
  const fetchTodos = async () => {
    try {
      const { data } = await axiosInstance.get('/todos')
      setTodos(data)
    } catch (error) {
      console.error('%c할 일 목록을 가져오는 중 오류 발생:%c', error, 'color: #f0637b;')
    }
  }

  // 🔥 axios post
  const postTodos = async (todo) => {
    try {
      await axiosInstance.post('/todos', todo)
      fetchTodos()
    } catch (error) {
      console.error('%c할 일을 추가하는 중 오류 발생:%c', error, 'color: #f0637b;')
    }
  }

  // 🔥 axios delete
  const deleteTodos = (todoId) => {
    try {
      axiosInstance.delete(`/todos/${todoId}`)
      fetchTodos()
    } catch (error) {
      console.error('%c할 일을 제거하는 중 오류 발생:%c', error, 'color: #f0637b;')
    }
  }

  // 🔥 axios patch
  const patchTodos = (todoId, edit) => {
    // console.log('Todo ID:', todoId)
    // console.log('Edit Todo:', edit)
    // console.log('API URL:', `http://localhost:4000/todos/${todoId}`)
    //  404 => json 서버 꺼짐
    try {
      axiosInstance.patch(`/todos/${todoId}`, edit)
      fetchTodos()
    } catch (error) {
      console.error('%c할 일을 수정하는 중 오류 발생:%c' + error, 'color: #f0637b;')
    }
  }

  // 🔥 fetch : JSON.stringify를 '직접' body에 추가
  // await fetch("http://localhost:4000/todos", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(todo),
  // });

  useEffect(() => {
    fetchTodos()
  }, [])

  console.log('todos=> ', todos)

  return (
    <>
      <form
        onSubmit={(e) => {
          // 👇 submit했을 때 브라우저의 새로고침을 방지합니다.
          e.preventDefault()
          postTodos(todo)
        }}
      >
        <input
          type="text"
          onChange={(ev) => {
            const { value } = ev.target
            setTodo({
              ...todo,
              title: value
            })
          }}
        />
        <button>추가하기</button>

        <fieldset>
          <input
            type="text"
            placeholder="수정하고싶은 Todo ID"
            onChange={(ev) => {
              setTargetId(ev.target.value)
            }}
          />
          <input
            type="text"
            placeholder="수정값 입력"
            onChange={(ev) => {
              setEditTodo({
                ...editTodo,
                title: ev.target.value
              })
            }}
          />
          <button
            // type='button' 을 추가해야 form의 영향에서 벗어남
            type="button"
            onClick={() => patchTodos(targetId, editTodo)}
          >
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
