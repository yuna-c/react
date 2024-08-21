import './styles/App.css';

// redux 추가
import { useDispatch, useSelector } from 'react-redux';
import { minusOne, plusOne } from './redux/modules/counter';

// 🌞🌞🌞🌞🌞
// - redux 설치 방법
// yarn add redux react-redux
/* yarn add redux, yarn add react-redux 축약 */

// - Action Creator
// 1. 휴먼에러 (오타) 방지
// 2. 유지보수의 효율성 증가
// 3. 코드 가독성

const App = () => {
  // 🌞 4
  const counterReducer = useSelector((state) => {
    return state.counter;
  });

  console.log(`counterReducer=>`, counterReducer);

  // 🌞 5
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
          dispatch(plusOne());
        }}
      >
        +1
      </button>
      {counterReducer.number}
      <button
        onClick={() => {
          // dispatch({type: 'MINUS_ONE'});
          // dispatch(minusOne(호출 생성));
          dispatch(minusOne());
        }}
      >
        - 1
      </button>
    </>
  );
};

export default App;
