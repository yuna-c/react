import './App.scss';

function App() {
	const styles = {
		color: 'blue',
		fontSize: '30px',
	};
	return (
		<>
			<div id='id' className='class'>
				{/* JS요소가 들어가니 중괄호 1, 객체가 들어가야 하니 중괄호 2 */}
				<p style={styles}>red</p>
			</div>
		</>
	);
}

export default App;
