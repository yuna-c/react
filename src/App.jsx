import { useState } from 'react';
import './styles/App.scss';

const App = () => {
	const [items, setItems] = useState([1, 2, 3]);
	const addItem = () => {
		// items.push(items.length + 1); // 배열에 직접 push, 불변성 위반
		// setItems(items); // 상태 업데이트
		setItems([...items, items.length + 1]);
	};
	return (
		<div>
			<button onClick={addItem}>Add Item</button>
			<ul>
				{items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
};
export default App;
