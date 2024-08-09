// src/About.jsx
import Todo from './components/Todo.jsx';
import './App.scss';

// children
// : props와 비슷하게 부모에서 자식 컴포넌트로 값을 보내주는 방법
// : layout 컴포넌트 만들 때 주로 사용

function App() {
	const title = '제목입니다';
	return (
		<>
			<h1>추출테 스트</h1>
			<Todo title={title} />
		</>
	);
}
export default App;
