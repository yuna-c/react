// Action Value
const ADD_NUMBER = 'ADD_NUMBER';
const REMOVE_NUMBER = 'REMOVE_NUMBER';

// Action Creator
export const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    payload
  };
};

export const removeNumber = (payload) => {
  return {
    type: REMOVE_NUMBER,
    payload
  };
};

// 🌞 3
// 초기 상태값 const 객체 = {key(number) : value(0)}
const initialState = {
  number: 0
};

// 리듀서(변화를 일으키는 함수)
const counter = (state = initialState, action) => {
  // 🌞 6
  console.log(`action=>`, action);

  switch (action.type /* action : type이라는 종류를 가진 객체 */) {
    case ADD_NUMBER:
      return {
        number: state.number + action.payload
      };

    case REMOVE_NUMBER:
      return {
        number: state.number - action.payload
      };

    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;
