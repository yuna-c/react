import './styles/App.scss';

const App = () => {
	return <></>;
};
export default App;

/*
1.Component
1-1. 리액트의 핵심
리액트에서 개발할 모든 애플리케이션 : 컴포넌트 조각으로 구성
컴포넌트 UI 구축 작업 단순화
면의 특정 부분이 어떻게 생길지 정하는 선언체

1-2. 명령형 프로그래밍 vs 선언형 프로그래밍

: DOM(명령형 프로그래밍)
// Hello, World! 화면에 출력하기
// 순수 javaScript 명령형 코드
const root = document.getElementById('root'); 
const header = document.createElement('h1'); 
const headerContent = document.createTextNode(
	'Hello, World!'
);

header.appendChild(headerContent); 
root.appendChild(header);

: 리액트(선언형 프로그래밍)
// React 코드 (선언적인)
const header = <h1>Hello World</h1>; // jsx
ReactDOM.render(header, document.getElementById('root'));


2. 렌더링

2-1. 기본개념
컴포넌트가 현재 props와 state의 상태에 기초하여 UI를 어떻게 구성할지 컴포넌트에게 요청하는 작업

* 렌더링 일으키는 것은 (**triggering**)- UI를 주문하고 주방으로 전달하는 것
* 렌더링한다는 것은 (**rendering**)- 주방에서 컴포넌트가 UI를 만들고 준비하는 것
* 렌더링 결과는 실제 DOM에 커밋한다는 것은 (**commit**) - 리액트가 준비된 UI를 손님 테이블에 올려놓는 것

2-2. 렌더링 (렌더링 발생하는 경우)

* 첫 리액트 앱을 실행했을 때
* 현재 리액트 내부에 어떤 상태(state)에 변경이 발생했을 때. 
	- 컴포넌트 내부 state가 변경되었을 때
	- 컴포넌트에 새로운 props가 들어올 때,
	- 상위 부모 컴포넌트에서 위에 두 이유로 렌더링이 발생했을 때


3. 리렌더링
첫 렌더링을 끝난 이후에 추가로 렌더링을 트리거 하려면 상태를 변경(useState)


4. 브라우저 렌더링(페인팅)
 렌더링이 완료되고 React가 DOM을 업데이트한 후 브라우저는 화면을 그림
*/
