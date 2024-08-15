import './styles/App.css';

// 🌞🌞🌞🌞🌞
// useContext(전역 데이터 관리)
// 특정 영역 안에서 특정 state(상태)를 공유한다.

// props => prop drilling(부모 → 자식 → 그 자식 → 그자식의 자식)
// prop drilling의 문제점
// 너무 깊어지면 이 prop이 어떤 컴포넌트로부터 왔는지 파악이 어려움
// 어떤 컴포넌트에서 오류가 발생할 경우 추적이 힘듬

// context API 필수 개념

// - createContext: context를 생성
// - useContext: context를 구독하고 해당 context의 현재 값을 읽음
// - Provider: context를 하위 컴포넌트에게 전달

const App = () => {
  return (
    <>
      <div></div>
    </>
  );
};

export default App;
