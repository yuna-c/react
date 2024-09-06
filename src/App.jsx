import './styles/App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

// https://axios-http.com/kr/docs/req_config
// axios.get(url[, config]) : GET(url은 매개변수, 대괄호([])

const App = () => {
  const apiKey = import.meta.env.VITE_API_KEY
  const server = import.meta.env.VITE_EXAMPLE_SERVER_URL
  const secret = import.meta.env.VITE_SECRET_KEY
  console.log('API Key:', apiKey)
  console.log('SERVER Url:', server)
  console.log('SECRET Key:', secret)

  const [todos, setTodos] = useState(null)

  const fetchTodos = async () => {
    const { data } = await axios.get('http://localhost:4000/todos')
    setTodos(data)
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  console.log('todos=> ', todos)
  return <div>App</div>
}

export default App
