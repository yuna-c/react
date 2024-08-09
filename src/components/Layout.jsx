const Layout = (props) => {
	const children = props.children;
	return (
		<main>
			<div>헤더</div>
			{children}
			<div>푸터</div>
		</main>
	);
};

export default Layout;
