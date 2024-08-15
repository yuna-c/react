import { useState } from 'react';
import './styles/App.css';

// 🌞🌞🌞🌞🌞
// useState

const App = () => {
  const [count, setCount] = useState(0);
  // 직접 값 입력
  const handleCountPlus = () => {
    setCount(count + 1);
  };

  // 함수
  const handleCountPlusFn = () => {
    // setCount(함수 (인자:현재 state) => {변경하는 코드})
    setCount((현재값) => {
      return 현재값 + 1;
    });
  };
  return (
    <>
      <div>
        {count}
        <br />
        <button onClick={handleCountPlus}>직접 값 입력</button>
        <button onClick={handleCountPlusFn}>함수</button>
      </div>
    </>
  );
};

export default App;
