import Header from '../components/Header';

const layoutStyles = {
	margin: 20,
	padding: 20,
	border: `.1rem solid #DDD`,
};
const containerStyles = {
	display: 'flex',
	justifyContent: 'center',
};

export default function Layout(props) {
	return (
		<div style={layoutStyles}>
			<Header/>
			<div style={containerStyles}>
				{props.children}
			</div>
		</div>
	)
}