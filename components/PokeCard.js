import Link from "next/link";

const listItemStyles = {
	marginRight: 10,
	marginBottom: 10,
};

const linkStyles = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	padding: 20,
	border: '1px solid grey',
	borderRadius: 5,
	textDecoration: 'none',
	color: 'darkRed',
};

const upperFirst = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

const PokeCard = props => {
	const number = props.url.split('/pokemon/')[1].match('\\b\\d+\\b')[0];
	return (
		<li style={listItemStyles}>
			<Link href='/pokemon/[name]' as={`/pokemon/${props.name}`}>
				<a style={linkStyles}>
					<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`} alt={props.name} />
					<span>{upperFirst(props.name)}</span>
				</a>
			</Link>
			<style jsx>{`
				a {
					transition: all .2s;
				}
				a:hover {
					box-shadow: inset 0 0 2px 5px gray;
				}
            `}</style>
		</li>
	);
};

export default PokeCard;