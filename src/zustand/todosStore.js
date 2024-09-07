// import { create } from 'zustand'

// const useTodosStore = create((set) => ({
//   todos: [],
//   addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
//   removeTodo: (index) =>
//     set((state) => ({
//       todos: state.todos.filter((_, i) => i !== index)
//     }))
// }))

// export default useTodosStore

// import create from 'zustand'

// // Zustand 스토어 생성
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
//       }),
//     addTodo: (newTitle) =>
//       set((state) => {
//         state.todos.push({
//           id: state.todos.length + 1,
//           title: newTitle,
//           tasks: []
//         })
//       }),
//     removeTodo: (index) =>
//       set((state) => {
//         state.todos.splice(index, 1)
//       })
//   }))
// )

// export default useTodosStore

import { produce } from 'immer'
import { create } from 'zustand'
// 미들웨어 사용 : persist, devtools(내장)
import { persist } from 'zustand/middleware'

const useTodosStore = create(
  // persist 미들웨어를 사용하여 localStorage 또는 sessionStorage에 상태 저장
  persist(
    (set) => ({
      // 초기 todos 상태
      todos: [
        {
          id: 1,
          title: 'Learn Zustand',
          tasks: [{ id: 1, task: 'Read documentation', done: false }]
        }
      ],

      // 새로운 task를 todo에 추가하는 함수
      addTask: (todoId, newTask) =>
        set(
          // immer를 사용하여 불변성을 자동으로 유지
          produce((state) => {
            const todo = state.todos.find((todo) => todo.id === todoId)
            if (todo) {
              todo.tasks.push(newTask) // immer로 불변성 유지: 직접 수정 가능
            }
            // return { todos: state.todos }; // immer가 자동으로 불변성 유지
          })
        ),

      // task의 완료 상태를 토글하는 함수
      toggleTask: (todoId, taskId) =>
        set(
          produce((state) => {
            const todo = state.todos.find((todo) => todo.id === todoId)
            if (todo) {
              const task = todo.tasks.find((task) => task.id === taskId)
              if (task) {
                task.done = !task.done // immer로 불변성 유지: 직접 수정 가능
              }
            }
          })
        ),

      // 새로운 todo를 추가하는 함수
      addTodo: (newTitle) =>
        set(
          produce((state) => {
            state.todos.push({
              id: state.todos.length + 1,
              title: newTitle,
              tasks: []
            })
          })
        ),

      // 특정 인덱스의 todo를 삭제하는 함수
      removeTodo: (index) =>
        set(
          produce((state) => {
            state.todos.splice(index, 1) // immer로 불변성 유지
          })
        )
    }),
    {
      name: 'todos-storage', // localStorage에 저장될 키 이름 설정
      getStorage: () => localStorage // localStorage에 저장하도록 설정 (필요 시 sessionStorage로 변경 가능)
    }
  )
)

export default useTodosStore
