import { useState } from 'react';
import './styles/App.scss';

// refactoring
// : 컴포넌트 분리
// : 반복되는 컴포넌트 처리하는

const App = () => {
	const styles = {
		minHeight: 'calc( 100vh - 10rem)',
		listStyle: 'none',
		alignItems: 'center',
		justifyContent: 'center',
		display: 'flex',
		gap: '20px',
	};

	// 추가 삭제를 위해 state에 담아 상태값 만들기
	// ID값의 절대값 대신 유니크한 값으로 변경 new Date().getTime() + n 처리
	const [users, setUsers] = useState([
		{ id: new Date().getTime(), age: 32, name: '아이유' },
		{ id: new Date().getTime() + 1, age: 22, name: '민지' },
		{ id: new Date().getTime() + 2, age: 32, name: '수지' },
		{ id: new Date().getTime() + 3, age: 39, name: '김사랑' },
		{ id: new Date().getTime() + 4, age: 29, name: '유나' },
	]);
	console.log(users);

	return (
		<>
			<ul style={styles}>
				{users.map((user, idx) => (
					<User id={idx} key={user.id} user={user} />
				))}
			</ul>
		</>
	);
};

// User 컴포넌트를 분리해서 구현
const User = ({ user, idx }) => {
	const boxStyle = {
		width: '100px',
		height: '100px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		border: '1px solid #000',
		borderRadius: '3px',
		backgroundColor: '#ceebef',
	};

	const { age, name } = user;

	return (
		<li id={idx} key={user.id} style={boxStyle}>
			{name} <br /> {age}살
		</li>
	);
};

export default App;
