import './styles/App.css';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
// import { addNumber, removeNumber } from './redux/modules/counter';
import { addNumber, removeNumber } from './redux/slices/counterSlice';

// 🌞🌞🌞🌞🌞
// - RTK(Redux ToolKit)
// 코드는 더 적게, 그리고 리덕스를 더 편하게 쓰기 위한 기능들을 흡수해서 만든 것이 리덕스툴킷
// module 파일만 바뀜
// Action Value와 Action Creator를 이제 직접 생성해주지 않고, Action Value, Action Creator, Reducer가 하나로 합쳐졌다는 점

// redux-toolkit 설치
// yarn add react-redux @reduxjs/toolkit

// - Flux 패턴
// 애플리케이션 아키텍처 ->  단방향 흐름을 강조
// 1. **Dispatcher**: 애플리케이션 내 모든 데이터 흐름을 관리하는 중앙 허브 역할을 합니다. 액션들이 발생하면 디스패처를 통해 스토어로 전달됩니다.
// 2. **Stores**: 애플리케이션의 상태(데이터)와 로직을 보유합니다. 스토어는 디스패처를 통해 전달된 액션에 반응하여 상태를 변경하고, 변경 사항을 뷰에 알립니다.
// 3. **Actions**: 상태 변화를 일으킬 때 사용하는 간단한 객체입니다. 사용자 인터페이스에서 발생한 사용자의 행동을 액션으로 표현하고, 이를 디스패처를 통해 스토어로 전달합니다.
// 4. **Views (React Components)**: 사용자 인터페이스를 구성하는 React 컴포넌트들입니다. 스토어에서 상태가 변하면, 뷰는 이를 반영하여 사용자 인터페이스를 업데이트합니다.

// Duck vs Flux
// 공통점 : 애플리케이션의 상태 관리와 데이터 흐름
// Ducks : Redux 코드의 구조를 단순화
// Flux : 애플리케이션의 데이터 흐름을 체계화

const App = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const counterReducer = useSelector((state) => {
    return state.counter.number;
  });

  console.log(`counterReducerToolkit=>`, counterReducer);

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
