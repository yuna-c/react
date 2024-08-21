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
