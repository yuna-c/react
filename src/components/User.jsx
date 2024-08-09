import Button from './Button';
// rafce 화살표 함수 자동완성 기능

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
				<Button color='red' onClick={() => deleteUserHandler(id)}>
					삭제
				</Button>
			</div>
		</li>
	);
};

export default User;
