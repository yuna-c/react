import { useState } from 'react';
import './styles/App.css';

// 🌞🌞🌞🌞🌞
// useState

// 기본 업데이트 : 첫번째 줄 ~ 세번째 줄의 있는 setNumber가 각각 실행되는 것이 아니라, 배치(batch)로 처리, 명령을 하나로 모아 최종적으로 한번만 실행
// 함수형 업데이트 : 3번을 동시에 명령을 내리면, 그 명령을 모아 순차적으로 각각 1번씩 실행

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {count}
        <br />
        <button
          onClick={() => {
            setCount(count + 1);
            setCount(count + 1);
            setCount(count + 1);
          }}
        >
          직접 값 입력 +1
        </button>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
            setCount((prev) => prev + 1);
            setCount((prev) => prev + 1);
          }}
        >
          함수 +3
        </button>
      </div>
    </>
  );
};

export default App;
