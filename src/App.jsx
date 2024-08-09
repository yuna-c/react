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

const App = () => {
	const [toggle, setToggle] = useState(false);
	const [name, setName] = useState('나나');
	const handleChangeName = () => {
		setName('최나나');
	};
	const handleChangeToggle = () => {
		setToggle(!toggle);
	};
	return (
		<>
			<h1>React State</h1>
			<button onClick={handleChangeToggle}>최르순이로!!</button>
			{toggle ? '르순이' : '최르순이'}
			<br />
			<button onClick={handleChangeName}>최나나로!</button>
			{name}
		</>
	);
};
export default App;
