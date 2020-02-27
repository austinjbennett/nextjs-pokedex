import Header from '../components/Header';

const layoutStyles = {
	margin: 20,
	padding: 20,
	border: `.1rem solid #DDD`,
};

export default function Layout(props) {
	return (
		<div style={layoutStyles}>
			<Header/>
			{props.children}
		</div>
	)
}