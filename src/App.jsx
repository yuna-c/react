// import styled from "styled-components";
// import HeavyComponent from "./components/HeavyComponent.jsx";
// import ObjectComponent from "./components/ObjectComponent";
import './styles/App.css';
import { useState } from 'react';

// 🌞🌞🌞🌞🌞
// Custom Hooks

// Custom Hooks 주의사항
// 커스텀 훅의 함수 이름은 use로 시작(useInput)
// 파일 이름은 use로 시작할 필요는 없으며, 원하는 대로 지정(ex : useInput)

const App = () => {
  // input의 갯수가 늘어날때마다 state와 handler가 같이 증가한다.
  const [title, setTitle] = useState('');
  const onChangeTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  // input의 갯수가 늘어날때마다 state와 handler가 같이 증가한다.
  const [body, setBody] = useState('');
  const onChangeBodyHandler = (e) => {
    setBody(e.target.value);
  };
  return (
    <>
      <input type="text" name="title" value={title} onChange={onChangeTitleHandler} />
      <input type="text" name="title" value={body} onChange={onChangeBodyHandler} />
    </>
  );
};

export default App;
