import { useEffect, useState } from 'react';
import './styles/App.css';

// 🌞🌞🌞🌞🌞
// useEffect
// 리액트 컴포넌트가 렌더링 된 이후마다 특정 작업을 수행하도록 설정할 수 있는 Hook
// 어떤 컴포넌트가 화면에 보여졌을 때 내가 무언가를 실행하고 싶을 때, 어떤 컴포넌트가 화면에서 사라졌을 때 무언가를 실행하고 싶을 때

// strict mode : 콘솔이 2번 찍혀 있는 것이 보이는 이유 => strict mode를 제거하는 방법은 main.jsx에서 <React.StrictMode> 부분을 제거

const App = () => {
  const [value, setValue] = useState('');
  const [count, setCount] = useState(0);

  // setValue가 계속 변하며 리랜더링 되며 계속 useEffect 호출되기 때문에
  // useEffect(() => {console.log('hello useEffect')});

  // 의존성 배열 → 의존성 배열이 빈 배열인 경우 : 최초 렌더링 이후 딱 한번만 실행되고 그 이후로는 어떤일이 일어나도 실행X
  // useEffect(() => {console.log('hello useEffect')}, []);

  // 의존성 배열 → 의존성 배열에 값이 있는 경우 : 렌더링 후 배열에 값을 넣으면 그 값(trriger)이 바뀔 때만 useEffect을 실행
  useEffect(() => {
    console.log('hello useEffect');
  }, [count]);

  return (
    <>
      <h1>useEffect</h1>
      <input
        type='text'
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          console.log('value => ', value);
        }}
      />
      <br />
      <br />
      <br />

      {count}
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        증가
      </button>
    </>
  );
};

export default App;
