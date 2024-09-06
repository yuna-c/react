import './styles/App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

// https://axios-http.com/kr/docs/req_config
// axios.get(url[, config]) : GET(url은 매개변수, 대괄호([])
// axios.post(url[, data[, config]]) : POST : 서버에 데이터를 추가할 때 사용, body
// axios.delete(url[, config]) : DELETE는 저장되어 있는 데이터를 삭제

const App = () => {
  const apiKey = import.meta.env.VITE_API_KEY
  const server = import.meta.env.VITE_EXAMPLE_SERVER_URL
  const secret = import.meta.env.VITE_SECRET_KEY
  console.log('API Key:', apiKey)
  console.log('SERVER Url:', server)
  console.log('SECRET Key:', secret)
  // newTodo
  const [todo, setTodo] = useState({
    title: ''
  })

  const [todos, setTodos] = useState(null)

  // 🔥 axios get
  const fetchTodos = async () => {
    const { data } = await axios.get('http://localhost:4000/todos')
    setTodos(data)
  }

  // 🔥 axios post
  const postTodos = async (todo) => {
    await axios.post('http://localhost:4000/todos', todo)
  }

  // 🔥 axios delete
  const deleteTodos = (todoId) => {
    axios.delete(`http://localhost:4000/todos/${todoId}`)
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
