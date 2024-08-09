import './App.scss';

function App() {
	return (
		<>
			<div id='id' className='class'>
				{/* JS요소가 들어가니 중괄호 1, 객체가 들어가야 하니 중괄호 2 */}
				<p
					style={{
						color: 'red',
						fontSize: '20px',
					}}
				>
					red
				</p>
			</div>
		</>
	);
}

export default App;
