import './styles/App.css';
import { useState } from 'react';

// redux 추가
import { useDispatch, useSelector } from 'react-redux';
// import { minusOne, plusOne } from './redux/modules/counter';
import { addNumber, removeNumber } from './redux/modules/counter';

// 🌞🌞🌞🌞🌞
// - redux 설치 방법
// yarn add redux react-redux
/* yarn add redux, yarn add react-redux 축약 */

// - payload
// reducer에 얼만큼의 값을 어떻게 해! 라고 할 때, 이 얼만큼의 값을 전달해 줄 수 있는 payload의 개념

const App = () => {
  const [count, setCount] = useState(0);

  // 🌞 4
  const counterReducer = useSelector((state) => {
    return state.counter;
  });

  console.log(`counterReducer=>`, counterReducer);

  // 🌞 5
  const dispatch = useDispatch();

  return (
    <>
      {counterReducer.number}
      <br />
      <input type="number" value={count} onChange={(e) => setCount(+e.target.value)} />
      <button
        onClick={() => {
          dispatch(addNumber(count));
        }}
      >
        더하기
      </button>

      <button
        onClick={() => {
          // dispatch({type: 'MINUS_ONE'});
          // dispatch(minusOne(호출 생성));
          dispatch(removeNumber(count));
        }}
      >
        빼기
      </button>
    </>
  );
};

export default App;
