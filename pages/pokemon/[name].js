import Layout from "../../components/Layout";
import fetch from 'isomorphic-unfetch';

const Post = props => (
	<Layout>
		<h1>Name: {props.pokemon.name}</h1>
		<img src={props.pokemon.sprites.front_default} alt="" />
		<p>Height: {props.pokemon.height} decimetres.</p>
		<p>Weight: {props.pokemon.weight} hectograms.</p>
		<p>Category: {props.pokemon.category}</p>
		<p>Type(s): {props.pokemon.types.map(type => (
			<span>{type.type.name} </span>
		))}</p>

		{/*<p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>*/}
		{/*{props.show.image ? <img src={props.show.image.medium} /> : null}*/}
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