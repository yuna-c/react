import './App.scss';

function Child() {
	return <div>자식</div>;
}

function Mother() {
	return (
		<>
			<h2>엄마</h2>
			<Child />
		</>
	);
}

function GrandParents() {
	return (
		<>
			<h1>할아버지</h1>
			<Mother />
		</>
	);
}

function App() {
	const handleClick = () => {
		alert('클릭');
	};
	return (
		<div onClick={handleClick}>
			<h1>부모 자식 관계 테스트</h1>
			<GrandParents />
		</div>
	);
}

export default App;
