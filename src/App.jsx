import './App.scss';
function App() {
	const handleClick = () => {
		alert('클릭');
	};
	return (
		<div
			style={{
				height: '100vh',
				display: ' flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<span>이것은 내가 만든 APP 컴포넌트입니다.</span>
			<button onClick={handleClick}>클릭</button>
		</div>
	);
}

export default App;
