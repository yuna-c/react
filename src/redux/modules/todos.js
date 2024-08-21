// action value
const ADD_TODO = 'ADD_TODO';

// action creator export
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload /*input으로 받은 */
  };
};

// state init
const initialState = {
  todos: [
    {
      id: 1,
      title: 'react를 배워봅시다'
    },
    {
      id: 2,
      title: 'redux를 배워봅시다'
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

    default:
      return state;
  }
};

export default todos;
