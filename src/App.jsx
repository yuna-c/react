import { useState } from 'react';
import './styles/App.scss';
// State(hook)
// : State란 컴포넌트 내부에서 변경 될 수 있는 값(렌더링)
/*
[ // Array의 구조분해 할당
	변수 : '르순이',
	변수를 변경하는 함수 : function(){}
]
*/
function App() {
	let [name, setName] = useState('르순이');
	const handleChangeName = () => {
		setName('최르순');
	};
	return (
		<>
			<h1>React State</h1>
			<button onClick={handleChangeName}>{name}</button>
		</>
	);
}
export default App;
