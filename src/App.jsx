import { useState } from 'react';
import './styles/App.scss';

const App = () => {
	const [number, setNumber] = useState(0);
	const formEventObstruct = (e) => {
		e.preventDefault();
	};
	const onPlusNumberClick = () => {
		setNumber(number + 1);
	};
	const onMinusNumberClick = () => {
		number < 1 ? setNumber(number) : setNumber(number - 1);
	};
	const styles = {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
	};

	return (
		<>
			<div style={styles}>
				<span>{number}</span>
				<form onClick={formEventObstruct}>
					<button onClick={onMinusNumberClick}> -1 </button>
					<button onClick={onPlusNumberClick}> +1 </button>
				</form>
			</div>
		</>
	);
};
export default App;
