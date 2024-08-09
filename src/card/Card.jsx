import './Card.scss';

export default function Card(props) {
	console.log(props);
	return (
		<article className='Card'>
			<div className='bgBox' style={{ backgroundColor: props.colorName }}></div>
		</article>
	);
}
