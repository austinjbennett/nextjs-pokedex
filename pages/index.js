import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import pokemonList from '../pokemonList';
import PokeCard from '../components/PokeCard';

const listStyles = {
	listStyle: 'none',
	display: 'flex',
	flexWrap: 'wrap',
};

const Index = props => {
	return (
		<Layout>
			<ul style={listStyles}>
				{props.pokemons.map(pokemon => (
					<PokeCard name={pokemon.name} url={pokemon.url} key={pokemon.name} />
				))}
			</ul>
		</Layout>
	)
};

Index.getInitialProps = async function() {
	/* This first block build an array of all pokemon from the pokeapi */
	// const pokemons = [];
	// let next = 'https://pokeapi.co/api/v2/pokemon';
	// while (next) {
	// 	const res = await fetch(next);
	// 	const data = await res.json();
	// 	pokemons.push(...data.results);
	// 	next = data.next;
	// }
	/* End dynamic(api built) pokemon list */

	// Only show first 30 pokemon
	// const pokemons = pokemonList.slice(0, 30);

	// Show all pokemon from internal json list of pokemon to avoid tons of api calls
	const pokemons = pokemonList;

	return { pokemons };
};

export default Index;