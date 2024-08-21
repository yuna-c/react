import './styles/App.css';

// 🌞🌞🌞🌞🌞
// - redux(전역 상태관리 라이브러리)
// prop drilling을 막기 위해 사용

// State를 공유하고자 할때 부-모 관계가 아니여도 됨
// 중간에 의미없이 컴포넌트를 거치지 않아도 됨
// 자식 컴포넌트에서 만든 State를 부모 컴포넌트에서도 사용

// - Global state vs Local state
// Local state (지역상태) : 컴포넌트에서 useState를 이용해서 생성한 state
// Global state (전역상태) : 중앙 state 관리소”
// 중앙 State관리소에서 State를 생성하고, 만약 어떤 컴포넌트에서 State가 필요하다면 컴포넌트가 어디에 위치하고 있든 상관없이 State를 불러와서 사용

// - Context API가 있음에도 Redux로 Global state를 관리하면 좋은 이유
// Context API : React 자체적으로 제공하는 전역 상태 관리 도구, Global State를 관리하는 한 가지 옵션, 복잡하지 않은 상태관리

// 1. 성능 최적화
// Context API는 Provider 하위의 모든 컴포넌트를 리렌더링,
// Redux는 상태 변경 시 관련된 컴포넌트만 선택적으로 업데이트할 수 있어 성능 관리가 용이

// 2. 상태 로직의 중앙화와 일관성
// Redux는 애플리케이션의 상태를 하나의 저장소(store)에 저장
// 상태 로직이 중앙에서 관리되어 더 일관성 있고 예측 가능한 상태 변경이 가능
// 모든 상태 변경 로직이 리듀서(reducers)에 의해 처리되기 때문에 디버깅과 테스팅이 용이

// 3. 강력한 미들웨어와 개발 도구
// 다양한 미들웨어를 지원하여 비동기 작업, 로깅, 상태 변경에 대한 추가 처리 등 복잡한 기능을 구현
// Redux DevTools와 같은 강력한 개발 도구를 통해 상태 변화를 시각적으로 모니터링하고 이전 상태로 롤백하는 등의 기능을 제공

// - redux란?
// 전역 상태관리 라이브러리
// “중앙 state 관리소”를 사용할 수 있게 도와주는 패키지(라이브러리)

const App = () => {
  return <></>;
};

export default App;
