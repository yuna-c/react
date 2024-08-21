// Action Creator
const PLUS_ONE = 'PLUS_ONE'; // value는 상수 생성
const MINUS_ONE = 'MINUS_ONE';

// 액션객체를 반환하는 함수 생성
export const plusOne = () => {
  return {
    type: PLUS_ONE
  };
};

export const minusOne = () => {
  return {
    type: MINUS_ONE
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
    case PLUS_ONE:
      return {
        number: state.number + 1
      };
    case MINUS_ONE:
      return {
        number: state.number - 1
      };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;
