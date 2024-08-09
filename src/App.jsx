import './App.scss';

const User = (props) => {
	console.log(`props =>`, props);
	console.log(`props =>`, { ...props });
	return <div>유저님 {props.children}</div>;
};
function App() {
	return <User abc='124'>안녕하세요!!!!!!!!!</User>;
	// User 컴포넌트 안의 값이 chidren안쪽으로 들어간다
}

export default App;
