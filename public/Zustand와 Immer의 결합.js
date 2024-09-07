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

// Zustand의 장점과 단점

// 장점
// - 간편한 사용: 간단한 API와 직관적인 사용법을 제공합니다.
// - 성능 최적화: 불필요한 리렌더링을 방지합니다.
// - React와의 완벽한 통합: React의 훅과 잘 통합되어 있습니다.
// - 미들웨어 지원: 로깅, 퍼시스턴스 등 다양한 미들웨어를 사용할 수 있습니다.
// - 유연성: 필요한 부분만 선택적으로 사용할 수 있습니다.
// - 커뮤니티와 자료: 예전엔 다른 대형 라이브러리에 비해 상대적으로 커뮤니티와 자료가 부족할 수 있었지만 꾸준한 인기 급(?)상승으로 많은 자료가 확보되고 있어요 😎

// 단점
// -  상태가 커지면 관리 어려움 : 상태가 많아지면 관리가 복잡해질 수 있습니다.

// Redux Toolkit과의 비교
// - 설정과 사용법: Zustand는 설정과 사용이 간단하며, Redux Toolkit은 더 구조화된 방법을 제공합니다.
// - 성능: 두 라이브러리 모두 성능 최적화가 잘 되어 있지만, Zustand는 불필요한 리렌더링을 방지하는 데 더 초점을 맞춥니다.
// - 유연성: Zustand는 필요한 부분만 선택적으로 사용할 수 있지만, Redux Toolkit은 보다 강력한 구조화된 방법을 제공합니다.
// - 커뮤니티와 자료: Redux Toolkit은 대형 커뮤니티와 풍부한 자료를 가지고 있으며, Zustand는 상대적으로 부족할 수 있지만 현재는 많은 인기에 힘입어 늘어나고 있습니다.
