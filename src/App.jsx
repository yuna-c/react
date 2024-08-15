import { useCallback, useState } from 'react';
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
// - useCallback hook : 함수를 캐싱(memoization)
// - useMemo hook : 값을 캐싱(memoization)

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

  // 함수도 참조형 변수의 일부이기 때문에 부모컴포넌트가 리랜더링 되면서 initCount 재생성(참조 주소가 바뀐 것) => initCount를 메모리 공간에 저장 해 놓고 특정 조건이 아닌 경우에는 변경되지 않도록 해야함(참조 주소 안 바뀌게)

  const initCount = useCallback(() => {
    setCount(0);

    console.log(`[COUNT 변경] ${count}에서 0으로 변경되었습니다.`); // 0 -> 0
    // useCallback(()=>{},[]) 메모지에션 하는 시점은 마운트가 된 직후, 그때는 count가 0(영원히) , Dependency Array[의존성 배열이 비워져 있기 때문]

    // count가 바뀔 때, 메모지에이션을 다시함
  }, [count]);

  return (
    <>
      <h1>memoization</h1>
      <h3>카운트 예제입니다.</h3>
      <p>현재 카운트 : {count}</p>

      <button onClick={onPlusButtonClickHandler}>+</button>
      <button onClick={onMinusButtonClickHandler}>-</button>

      <div style={boxesStyle}>
        <Box1 initCount={initCount} />
        <Box2 />
        <Box3 />
      </div>
    </>
  );
};

export default App;
