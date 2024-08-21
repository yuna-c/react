import './styles/App.css';

// redux 추가
import { useDispatch, useSelector } from 'react-redux';

// 🌞🌞🌞🌞🌞
// - redux 설치 방법
// yarn add redux react-redux
/* yarn add redux, yarn add react-redux 축약 */

// - redux 흐름
// 1. View 에서 액션이 일어난다.
// 2. dispatch 에서 action이 일어나게 된다.
// 3. action에 의한 reducer 함수가 실행되기 전에 middleware가 작동한다.
// 4. middleware 에서 명령내린 일을 수행하고 난뒤, reducer 함수를 실행한다. (3, 4번은 아직 몰라도 됩니다!)
// 5. reducer 의 실행결과 store에 새로운 값을 저장한다.
// 6. store의 state에 subscribe 하고 있던 UI에 변경된 값을 준다.
// https://velog.io/@annahyr/%EB%A6%AC%EB%8D%95%EC%8A%A4-%ED%9D%90%EB%A6%84-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0

// - 주요개념 복습
// - 액션객체란, 반드시 type이란 key를 가져야 하는 객체이다. 또한 리듀서로 보낼 “명령"이다.
// - 디스패치란, 액션객체를 리듀서로 보내는 “전달자” 함수이다.
// - 리듀서란, 디스패치를 통해 전달받은 액션객체를 검사하고, 조건이 일치했을 때 새로운 상태값을 만들어내는 “변화를 만들어내는" 함수이다.
// - 디스패치(dispatch)를 사용하기위해서는 useDispatch() 라는 훅을 이용해야 한다.
//   + 디스패치는 스토어의 내장함수 중 하나입니다.
//   + 우선, 디스패치는 액션을 발생 시키는 것 정도로 이해하시면 됩니다.
//   + dispatch 라는 함수에는 액션을 파라미터로 전달합니다.. dispatch(action) 이런식으로 말이죠.
// - 액션객체 type의 value는 대문자로 작성한다. (JS에서 상수는 대문자로 작성하는 룰이 있음)

const App = () => {
  // 🌞 4
  const counterReducer = useSelector((state) => {
    return state.counter;
  });

  console.log(`counterReducer=>`, counterReducer);

  // 🌞 5 action객체를 dispatch에 보내는 역할
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
          dispatch({
            type: 'PLUS_ONE'
          });
        }}
      >
        +1
      </button>
      {counterReducer.number}
      <button
        onClick={() => {
          dispatch({
            type: 'MINUS_ONE'
          });
        }}
      >
        - 1
      </button>
    </>
  );
};

export default App;
