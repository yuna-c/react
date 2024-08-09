import { useState } from 'react';
import './styles/App.scss';

// refactoring
// : 컴포넌트 분리
// : 반복되는 컴포넌트 처리하는

const App = () => {
	const styles = {
		margin: '30px 0 0 0 ',
		padding: '0',
		listStyle: 'none',
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
	const [age, setAge] = useState(0);
	const [name, setName] = useState('');

	const AddAge = (e) => {
		setAge(e.target.value);
	};

	const AddName = (e) => {
		setName(e.target.value);
	};

	const AddUserHandler = () => {
		// users state에 한 객체가 추가되면 됨
		console.log('age => ', age);
		console.log('name => ', name);
		const newUser = {
			id: new Date().getTime(),
			age: Number(age), // 문자로 입력이 되기 때문에 형변환
			name: name,
		};

		// 새로운 유저 배열에 담기
		setUsers([...users, newUser]);
		console.log(`newUser => `, newUser);
	};

	const deleteUserHandler = (id) => {
		// 삭제할 대상 id
		const deletedUser = users.filter((user) => user.id != id);
		// 유저의 id가 인풋으로 받은 id와 동일하지 않으면 삭제를 해줘라

		// console.log(deletedUser);
		setUsers(deletedUser);
	};

	return (
		<>
			<input type='number' value={age} onChange={AddAge} />
			<input type='text' value={name} onChange={AddName} />
			<button onClick={AddUserHandler}>add</button>
			<ul style={styles}>
				{users.map((user, idx) => (
					<User id={idx} key={user.id} user={user} deleteUserHandler={deleteUserHandler} />
				))}
			</ul>
		</>
	);
};

// User 컴포넌트를 분리해서 구현
const User = ({ user, idx, deleteUserHandler }) => {
	const boxStyle = {
		width: '100px',
		height: '100px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		border: '1px solid #000',
		borderRadius: '3px',
		backgroundColor: '#ceebef',
	};

	const { age, name, id } = user;

	return (
		<li id={idx} key={id} style={boxStyle}>
			<p>
				{name} <br /> {age}살
			</p>
			<div>
				{/* 실행이 될 때 user가 가지고 있는 id가 있어야 한다 */}
				<button onClick={() => deleteUserHandler(id)}>삭제</button>
			</div>
		</li>
	);
};

export default App;
