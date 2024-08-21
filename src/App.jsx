import './styles/App.css';

// redux 추가
import { useSelector } from 'react-redux';

// 🌞🌞🌞🌞🌞
// - redux 설치 방법
// yarn add redux react-redux
/* yarn add redux, yarn add react-redux 축약 */

const App = () => {
  // 🌞 4
  const counterReducer = useSelector((state) => {
    return state.counter;
  });
  console.log(`counterReducer=>`, counterReducer);

  return <></>;
};

export default App;
