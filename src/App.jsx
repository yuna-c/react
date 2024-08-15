import { useRef, useState } from 'react';
import './styles/App.css';

// 🌞🌞🌞🌞🌞
// useRef
// useState와 더불어 특정 값을 저장(저장 공간)하는데 쓰임
// rendering/re-rendering과 상관없이 값을 기억하기 위해 사용되는 것
// DOM요소 핸들링시 쓰임

// useState와 useRef의 차이
// useState: rendering/ re-rendering 관련 O
// useRef : rendering 관련 X

const App = () => {
  const [count, setCount] = useState(0);

  const ref = useRef('초기값');
  console.log('ref =>', ref); //current 가지고 있는 객체

  // ref 변경 가능
  ref.current = '바꾼 값';
  console.log('current =>', ref);

  return (
    <>
      <h1>useRef</h1>

      <br />
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        리랜더링
      </button>
    </>
  );
};

export default App;
