import { useState } from 'react';
import './styles/App.scss';

// 불변성 : 불변성이란 메모리에 있는 값을 변경할 수 없는 것
// 참조형 변수(객체,배열,함수) 불변성 X
// 리렌더링 여부 : state의 변화
// 리액트에서 원시데이터가 아닌 데이터를 수정할 때 불변성을 지켜주지 않고, 직접 수정을 가하면 값은 바뀌지만 메모리주소는 변함이 없게 되는것
const App = () => {
	const [dogs, setDogs] = useState(['말티즈']);
	const onClickHandler = () => {
		// dogs.push('시고르자브종'); 값이 바꼈다고 인지를 못함
		setDogs([...dogs, '시고르자브종']); //배열을 새로 만들고 강아지를 넣어줌
		console.log(dogs);
	};
	return (
		<>
			<button onClick={onClickHandler}>버튼</button>
		</>
	);
};
export default App;
