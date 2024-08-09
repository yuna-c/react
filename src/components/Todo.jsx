const Todo = ({ title }) => {
	// 1차 : (props), console.log(`props=>`, props); // 자식으로 title 내려줌
	// 2차 : (props), const { title } = props;
	// 3차 : { title }
	return (
		<div>
			{/* <h3>{props.title}</h3> */}
			<h3>{title}</h3>
			투두입니다.
		</div>
	);
};

export default Todo;
