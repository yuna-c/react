import './styles/App.css';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addNumber, removeNumber } from './redux/modules/counter';

// 🌞🌞🌞🌞🌞
// - RTK(Redux ToolKit)
// 코드는 더 적게, 그리고 리덕스를 더 편하게 쓰기 위한 기능들을 흡수해서 만든 것이 리덕스툴킷
// module 파일만 바뀜
// Action Value와 Action Creator를 이제 직접 생성해주지 않고, Action Value, Action Creator, Reducer가 하나로 합쳐졌다는 점

// redux-toolkit 설치
// yarn add react-redux @reduxjs/toolkit

const App = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const counterReducer = useSelector((state) => {
    return state.counter.number;
  });

  console.log(`counterReducer=>`, counterReducer);

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
