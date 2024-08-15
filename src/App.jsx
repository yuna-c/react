import styled from 'styled-components';
import HeavyComponent from './components/HeavyComponent.jsx';
import ObjectComponent from './components/ObjectComponent';
import './styles/App.css';

// 🌞🌞🌞🌞🌞
// memoization

// re-rendering 발생 조건
// 1. 컴포넌트에서 state가 바뀌었을 때
// 2. 컴포넌트가 내려받은 props가 변경되었을 때
// 3. 부모 컴포넌트가 리-렌더링 된 경우 자식 컴포넌트는 모두

// 최적화(Optimization)
// 리액트에서 리렌더링이 빈번 = 비용증가 => 불필요한 렌더링 줄이기(임시 값으로 가져다 놓고 쓰는)
// - memo(React.memo) : 컴포넌트를 캐싱(memoization)
// - useCallback hook : 함수를 캐싱(memoization)
// - useMemo hook : 값을 캐싱(memoization)

// memo(React.memo)
// 부모 컴포넌트가 리렌더링 되면 자식컴포넌트는 모두 리렌더링 되기 때문에, 바뀐게 없어서 리랜더링이 필요 없는 컴포넌트들을 React.memo

// useCallback(()=>{},[])

// useMemo(() => {}, [])

const StNav = styled.nav`
  background-color: #fcfc56c3;
  margin-top: 30px;
`;

const StFooter = styled.nav`
  background-color: #71d497d1;
  margin-top: 30px;
`;

const App = () => {
  return (
    <>
      <h1>useMemo</h1>
      <StNav>내비게이션 바</StNav>
      <HeavyComponent />
      <StFooter>푸터영역이에요</StFooter>
      <br />
      <hr />
      <br />
      <ObjectComponent />
    </>
  );
};

export default App;
