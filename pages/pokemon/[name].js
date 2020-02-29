import Layout from "../../components/Layout";
import fetch from 'isomorphic-unfetch';

const containerStyles = {
	backgroundColor: 'gainsboro',
	padding: 20,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
};

const upperFirst = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

const Post = props => (
	<Layout>
		<div style={containerStyles}>
			<h1>Name: {upperFirst(props.pokemon.name)}</h1>
			<img src={props.pokemon.sprites.front_default} alt="" />
			<p>Height: {props.pokemon.height} decimetres.</p>
			<p>Weight: {props.pokemon.weight} hectograms.</p>
			<p>Type(s): {props.pokemon.types.map(type => (
				<span>{upperFirst(type.type.name)} </span>
			))}</p>
		</div>
	</Layout>
);

Post.getInitialProps = async function(context) {
	const name = context.query.name;
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
	const pokemon = await res.json();
	// console.log('pokemon:', pokemon);
	return { pokemon };
};

export default Post;