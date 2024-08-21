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
  // 🌞 5
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  // 🌞 4
  const counterReducer = useSelector((state) => {
    return state.counter.number;
  });

  console.log(`counterReducer=>`, counterReducer.number);

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setCount(+value);
  };

  const onClickAddNumberHandler = () => {
    dispatch(addNumber(count));
  };

  const onClickRemoveNumberHandler = () => {
    dispatch(removeNumber(count));
  };
  return (
    <>
      {counterReducer}
      <br />
      <input type="number" value={count} onChange={onChangeHandler} />
      <button onClick={onClickAddNumberHandler}>더하기</button>

      <button onClick={onClickRemoveNumberHandler}>빼기</button>
    </>
  );
};

export default App;
