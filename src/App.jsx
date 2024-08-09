import './App.scss';

// div안에서 { } 를 쓰고 props.motherName을 넣어보세요.
function Child(props) {
	const name = '르탄';
	return <div>{`우리 엄마는 ${props.motherName}, 나는 ${props.motherName}의 아들 ${name}`}</div>;
}

function Mother() {
	const name = '홍부인';
	return <Child motherName={name} />;
}

function GrandFather() {
	return <Mother />;
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
