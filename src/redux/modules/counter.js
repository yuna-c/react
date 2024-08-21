// 🌞 3
// 초기 상태값 const 객체 = {key(number) : value(0)}
const initialState = {
  number: 0
};

// 리듀서(변화를 일으키는 함수)
const counter = (state = initialState, action) => {
  switch (action.type /* action : type이라는 종류를 가진 객체 */) {
    // case value:
    //   break;
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;
