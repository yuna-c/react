import Router from './shared/Router';

// 🌞🌞🌞🌞🌞
// yarn add react-router-dom

const App = () => {
  return (
    <>
      {/* 어디로 오면 어디로 보낼지! */}
      {/* 1. 어디로 오면 : path */}
      {/* 2. 어디로 보낼찌 : element */}
      {/* path="/" 아무것도 없을 때 */}
      {/* yarn dev 재시작 */}
      <Router />
    </>
  );
};

export default App;
