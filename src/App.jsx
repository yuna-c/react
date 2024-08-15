import { useEffect, useState } from 'react';
import './styles/App.css';

// 🌞🌞🌞🌞🌞
// useEffect
// 리액트 컴포넌트가 렌더링 된 이후마다 특정 작업을 수행하도록 설정할 수 있는 Hook
// 어떤 컴포넌트가 화면에 보여졌을 때 내가 무언가를 실행하고 싶을 때, 어떤 컴포넌트가 화면에서 사라졌을 때 무언가를 실행하고 싶을 때

const App = () => {
  const [value, setValue] = useState('');

  // setValue가 계속 변하며 리랜더링 되며 계속 useEffect 호출되기 때문에
  useEffect(() => {
    console.log('hello useEffect');
  });

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
    </>
  );
};

export default App;
