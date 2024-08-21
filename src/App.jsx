// import styled from "styled-components";
// import HeavyComponent from "./components/HeavyComponent.jsx";
// import ObjectComponent from "./components/ObjectComponent";
import useInput from './hooks/useInput';
import './styles/App.css';

// 🌞🌞🌞🌞🌞
// Custom Hooks

// Custom Hooks 주의사항
// 커스텀 훅의 함수 이름은 use로 시작(useInput)
// 파일 이름은 use로 시작할 필요는 없으며, 원하는 대로 지정(ex : useInput)

const App = () => {
  const [title, onChangeTitleHandler] = useInput();
  const [body, onChangeBodyHandler] = useInput();

  return (
    <>
      <input type="text" name="title" value={title} onChange={onChangeTitleHandler} />
      <input type="text" name="title" value={body} onChange={onChangeBodyHandler} />
    </>
  );
};

export default App;
