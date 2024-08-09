import './App.scss';
import Card from './card/Card';

function App() {
	// props
	// : 부모 컴포넌트가 자식 컴포넌트에게 물려준 데이터
	// : 컴포넌트 간의 정보 교류 방법
	// : props는 반드시 위에서 아래 방향 [부모]-> 자식 : 단방향
	// : props는 반드시 읽기 전용으로 취급하며, 변경X
	const colors = ['pink', 'lightblue', 'lightcoral', 'lightcyan', 'lightgreen'];
	return (
		<div>
			<h1>Color Chart</h1>
			<div style={{ display: 'flex' }}>
				{colors.map((color, idx) => {
					// 컴포넌트 호출시 특정 값을 key={value} 형태로 컴포넌트 내부에 전달 가능 {props}
					return <Card key={color + idx} colorName={color} index={idx} />;
				})}
			</div>
		</div>
	);
}

export default App;
