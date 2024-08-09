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
	const handleInputChange = (e) => {
		// 계속해서 State 변경
		// 이런 구성 필요한 이유 : 다른 곳에 출력할 수도 있어서
		console.log(text);
		setText(e.target.value);
	};
	return (
		<>
			<input type='text' onChange={handleInputChange} value={text} />
			{/* 
			input태그는 항상 state(value)와 onChange와 페어로 묶는다 
			value 묶었을 시 ? 제어 컴포넌트(⭐) : 비 제어 컴포넌트
			*/}
			<br />
			{text} {/* 변수화 시켜서 다른데서 쓰임 */}
		</>
	);
};
export default App;
