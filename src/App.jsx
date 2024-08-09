import { useState } from 'react';
import './styles/App.scss';

// refactoring
// : 컴포넌트 분리
// : 반복되는 컴포넌트 처리하는

const App = () => {
	const [toggle, setToggle] = useState(false);
	const onShowButton = () => {
		setToggle(!toggle);
		console.log(toggle);
	};
	const vegetables = ['감자', '고구마', '어이', '가지', '없어'];
	const users = [
		{ id: 1, age: 32, name: '아이유' },
		{ id: 2, age: 32, name: '민지' },
		{ id: 3, age: 32, name: '수지' },
		{ id: 4, age: 32, name: '김사랑' },
		{ id: 5, age: 32, name: '유나' },
	];

	const styles = {
		minHeight: 'calc( 100vh - 10rem)',
		listStyle: 'none',
		alignItems: 'center',
		justifyContent: 'center',
		display: 'flex',
		gap: '20px',
	};
	const boxStyle = {
		width: '100px',
		height: '100px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		border: '1px solid #000',
		borderRadius: '3px',
		backgroundColor: '#eac6c6',
	};

	return (
		<>
			<button onClick={onShowButton}>toggle</button>
			{!toggle ? (
				<ul style={styles}>
					{vegetables.map((vage, idx) => (
						<li key={vage + idx} style={boxStyle}>
							{vage}
						</li>
					))}
				</ul>
			) : (
				<ul style={styles}>
					{users.map((user, idx) => (
						<User id={idx} key={user.id} user={user} />
					))}
				</ul>
			)}
		</>
	);
};

const User = (props) => {
	const boxStyle = {
		width: '100px',
		height: '100px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		border: '1px solid #000',
		borderRadius: '3px',
		backgroundColor: '#9adce6',
	};

	return (
		<li id={props.idx} key={props.user.id} style={boxStyle}>
			{props.user.name}-{props.user.age}살
		</li>
	);
};

export default App;
