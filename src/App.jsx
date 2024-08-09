import './App.scss';

function GrandFather() {
	const name = '김할아범';
	return <Mother name={name} />;
}

function Mother(props) {
	const name = props.name;
	return <Child name={name} />;
}

function Child(props) {
	const name = props.name;
	return <div>{name}의 손자 르탄이</div>;
}

function App() {
	// props
	// : 부모 컴포넌트가 자식 컴포넌트에게 물려준 데이터
	// : 컴포넌트 간의 정보 교류 방법
	// : props는 반드시 위에서 아래 방향 [부모]-> 자식 : 단방향
	// : props는 반드시 읽기 전용으로 취급하며, 변경X

	return (
		<div>
			<GrandFather />
		</div>
	);
}

export default App;
