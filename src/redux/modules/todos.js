// action value
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

// action creator export
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload: payload /*input으로 받은 */ };
};

export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload: payload };
};

export const toggleTodo = (payload) => {
  return { type: TOGGLE_TODO, payload: payload };
};

// state init
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

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload] // 상태는 객체로 반환하고, todos 배열을 업데이트
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id)
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload.id ? { ...todo, isDone: !todo.isDone } : todo))
      };

    default:
      return state;
  }
};

export default todos;
