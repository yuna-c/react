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
// 자주 쓰이는 곳 :  onChange, onClick

const App = () => {
	const [text, setText] = useState('');
	return (
		<>
			<input
				// 계속해서 State 변경
				onChange={(e) => {
					setText(e.target.value);
				}}
			/>
			<br />
			{text}
		</>
	);
};
export default App;
