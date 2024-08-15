import { useState } from 'react';
import Box1 from './components/Box1';
import Box2 from './components/Box2';
import Box3 from './components/Box3';
import './styles/App.css';

// 🌞🌞🌞🌞🌞
// memoization

// re-rendering 발생 조건
// 1. 컴포넌트에서 state가 바뀌었을 때
// 2. 컴포넌트가 내려받은 props가 변경되었을 때
// 3. 부모 컴포넌트가 리-렌더링 된 경우 자식 컴포넌트는 모두

// 최적화(Optimization)
// 리액트에서 리렌더링이 빈번 = 비용증가 => 불필요한 렌더링 줄이기(임시 값으로 가져다 놓고 쓰는)
// - memo(React.memo) : 컴포넌트를 캐싱(memoization)
// - useCallback : 함수를 캐싱(memoization)
// - useMemo : 값을 캐싱(memoization)

// memo(React.memo)
// 부모 컴포넌트가 리렌더링 되면 자식컴포넌트는 모두 리렌더링 되기 때문에, 바뀐게 없어서 리랜더링이 필요 없는 컴포넌트들을 React.memo

const boxesStyle = {
  display: 'flex',
  marginTop: '10px'
};

const App = () => {
  console.log('App 컴포넌트가 렌더링 되었습니다.');

  const [count, setCount] = useState(0);

  // 1을 증가시키는 함수
  const onPlusButtonClickHandler = () => {
    setCount(count + 1);
  };

  // 1을 감소시키는 함수
  const onMinusButtonClickHandler = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>memoization</h1>
      <h3>카운트 예제입니다.</h3>
      <p>현재 카운트 : {count}</p>

      <button onClick={onPlusButtonClickHandler}>+</button>
      <button onClick={onMinusButtonClickHandler}>-</button>

      <div style={boxesStyle}>
        <Box1 />
        <Box2 />
        <Box3 />
      </div>
    </>
  );
};

export default App;
