import './styles/App.css'
import { useState } from 'react'

import useBearsStore from './zustand/bearsStore'
import useTodosStore from './zustand/todosStore'

function App() {
  const bears = useBearsStore((state) => state.bears)
  const increasePopulation = useBearsStore((state) => state.increasePopulation)

  const todos = useTodosStore((state) => state.todos)
  const addTodo = useTodosStore((state) => state.addTodo)
  const removeTodo = useTodosStore((state) => state.removeTodo)
  const [input, setInput] = useState('')

  return (
    <>
      <div>
        <h1>{bears} around here ...</h1>
        <button onClick={increasePopulation}>one up</button>
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
              {todo.title} <button onClick={() => removeTodo(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
export default App
