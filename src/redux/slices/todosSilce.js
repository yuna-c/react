import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {
      id: 1,
      title: 'react를 배워봅시다.'
    },
    {
      id: 2,
      title: 'redux를 배워봅시다.'
    },
    {
      id: 3,
      title: 'todoList를 만들어 봅시다.'
    },
    {
      id: 4,
      title: '잘 이해해 봅시다.'
    },
    {
      id: 5,
      title: '과제를 시작해 봅시다.'
    }
  ]
};

// createSlice의 결과
const todosSlice = createSlice({
  name: 'todoList',
  initialState: initialState,

  reducers: {
    addTodo: (state, action) => {
      return { ...state, todos: [...state.todos, action.payload] };
    },

    deleteTodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id)
      };
    },

    toggleTodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload.id ? { ...todo, isDone: !todo.isDone } : todo))
      };
    }
  }
});

export const { addTodo, deleteTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
