// 🔥 Zustand와 Immer의 결합

// 1. 직접 중첩된 상태를 업데이트 했을 때의 문제점
// 깊은 중첩 구조를 가지는 상태를 업데이트할 때 문제가 발생할 수 있음
// 배열이나 객체의 중첩된 상태를 업데이트할 때 불변성을 유지하지 않으면 상태 반영이 제대로 이루어지지 않음

// mutable vs immutable

// - useTodosStore.js
// import create from 'zustand'

// Zustand 스토어 생성
// const useTodosStore = create((set) => ({
//   todos: [],
//   addTodo: (text) =>
//     set((state) => {
//       // 불변성을 어기는 예시: 직접 배열을 수정
//       state.todos.push({ id: Date.now(), text, completed: false })
//       return state
//     }),
//   toggleTodo: (id) =>
//     set((state) => {
//       // 불변성을 어기는 예시: 직접 객체를 수정
//       const todo = state.todos.find((todo) => todo.id === id)
//       if (todo) {
//         todo.completed = !todo.completed
//       }
//       return state
//     })
// }))

// export default useTodosStore

// App.jsx
// import useTodosStore from "./zustand/todosStore";

// function App() {
//   const { todos, addTodo, toggleTodo } = useTodosStore();

//   return (
//     <div>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             <span
//               style={{
//                 textDecoration: todo.completed ? "line-through" : "none",
//               }}
//               onClick={() => toggleTodo(todo.id)}
//             >
//               {todo.text}
//             </span>
//           </li>
//         ))}
//       </ul>
//       <button
//         onClick={() => addTodo(prompt("새로운 todolist를 입력해주세요."))}
//       >
//         Add Todo
//       </button>
//     </div>
//   );
// }

// export default App;

// 리스트가 추가 / 수정 되더라도 다른 요소에 의해 리렌더링이 일어나지 않는 한, UI에 반영이 안돼

// 2. immer를 이용해 해결하는 경우
// immer :
// 상태를 쉽게 변경할 수 있게 해주는 라이브러리
// 데이터를 변경하지 않고도 마치 직접 수정하는 것처럼 코드를 작성할 수 있으며, Immer가 자동으로 불변성을 유지한 새 상태를 만듬

// yarn add immer

// import { create } from 'zustand'
// import { immer } from 'zustand/middleware/immer'

// const useTodosStore = create(
//   immer((set) => ({
//     todos: [
//       {
//         id: 1,
//         title: 'Learn Zustand',
//         tasks: [{ id: 1, task: 'Read documentation', done: false }]
//       }
//     ],
//     addTask: (todoId, newTask) =>
//       set((state) => {
//         const todo = state.todos.find((todo) => todo.id === todoId)
//         if (todo) {
//           todo.tasks.push(newTask) // 불변성 유지: immer가 자동으로 처리
//         }
//         // return { todos: state.todos }; // 변경된 참조가 기존 상태와 같아 리렌더링되지 않음
//       }),
//     toggleTask: (todoId, taskId) =>
//       set((state) => {
//         const todo = state.todos.find((todo) => todo.id === todoId)
//         if (todo) {
//           const task = todo.tasks.find((task) => task.id === taskId)
//           if (task) {
//             task.done = !task.done // 불변성 유지: immer가 자동으로 처리
//           }
//         }
//         // return { todos: state.todos }; // 변경된 참조가 기존 상태와 같아 리렌더링되지 않음
//       })
//   }))
// )

// export default useTodosStore
