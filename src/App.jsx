import Button from './components/Button';
import User from './components/User';
import { useState } from 'react';
import './styles/App.scss';

// age가 25세 이상인 user은 제외하고 렌더링 하기

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
		{ id: new Date().getTime() + 5, age: 16, name: '장원영' },
		{ id: new Date().getTime() + 5, age: 21, name: '김유정' },
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
			<Button color='pink' onClick={AddUserHandler}>
				add
			</Button>
			<ul style={styles}>
				{/* 방법 1.
				{users.map((user, idx) => {
					if (user.age < 25) {
						return <User id={idx} key={user.id} user={user} deleteUserHandler={deleteUserHandler} />;
					} else {
						return null;
					}
				})}
			*/}
				{/* 방법 2. */}
				{users
					.filter((u) => {
						return u.age < 25;
					})
					.map((user, idx) => (
						<User id={idx} key={user.id} user={user} deleteUserHandler={deleteUserHandler} />
					))}
			</ul>
		</>
	);
};

export default App;
