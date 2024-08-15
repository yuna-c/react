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
  const countRef = useRef(0);

  const plusStateCountButtonHandler = () => {
    setCount(count + 1, countRef);
    console.log(count + 1);
  };

  const plusRefCountButtonHandler = () => {
    countRef.current++;
    console.log(countRef.current++);
  };

  return (
    <>
      <div>
        state 영역입니다. {count} <br />
        <button onClick={plusStateCountButtonHandler}>state 증가</button>
      </div>
      <div>
        ref 영역입니다. {countRef.current} <br />
        <button onClick={plusRefCountButtonHandler}>ref 증가</button>
      </div>
    </>
  );
};

export default App;
