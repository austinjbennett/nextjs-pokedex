import Link from "next/link";

const PokeCard = props => (
	<li>
		<Link href='/pokemon/[name]' as={`/pokemon/${props.name}`}>
			<a>{props.name}</a>
		</Link>
	</li>
);

export default PokeCard;