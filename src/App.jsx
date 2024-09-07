import './styles/App.css'
import { useState } from 'react'

import useBearsStore from './zustand/bearsStore'
import useTodosStore from './zustand/todosStore'

function App() {
  // const bears = useBearsStore((state) => state.bears)
  // const increase = useBearsStore((state) => state.increase)
  const { bears, increase, init } = useBearsStore((state) => state)

  // 선택적 상태 구독
  const todos = useTodosStore((state) => state.todos)
  const addTodo = useTodosStore((state) => state.addTodo)
  const removeTodo = useTodosStore((state) => state.removeTodo)
  const toggleTodo = useTodosStore((state) => state.toggleTodo)
  const [input, setInput] = useState('')

  return (
    <>
      <div>
        <h1>{bears} around here ...</h1>
        <button onClick={increase}>one up</button>
        <button onClick={init}>init</button>
      </div>
      <div>
        <h1>Todo List</h1>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button
          onClick={() => {
            addTodo(input)
            setInput('')
          }}
        >
          Add Todo
        </button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <span
                onClick={() => toggleTodo(todo.id)} // 완료 상태 토글
                style={{
                  textDecoration: todo.done ? 'line-through' : 'none', // 완료된 todo는 줄 그어짐
                  cursor: 'pointer'
                }}
              >
                {todo.title}
              </span>
              <button onClick={() => removeTodo(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
export default App
