// src/About.jsx
import Layout from './components/Layout.jsx';
import './App.scss';

// children
// : props와 비슷하게 부모에서 자식 컴포넌트로 값을 보내주는 방법
// : layout 컴포넌트 만들 때 주로 사용

function App() {
	return (
		<Layout>
			<div>여긴 App의 컨텐츠가 들어갑니다.</div>
		</Layout>
	);
}
export default App;
