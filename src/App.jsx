import './App.scss';

function App() {
	const number = 1000;
	const arr = [1, 2, 3, 4, 5];
	return (
		<>
			<div>1</div>
			<div>{number}</div>
			{arr.map((num, idx) => {
				return <div key={idx}>{num}</div>;
			})}
		</>
	);
}

export default App;
