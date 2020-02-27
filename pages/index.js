import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import pokemonList from '../pokemonList';
import PokeCard from '../components/PokeCard';

const Index = props => {
	return (
		<Layout>
			<ul>
				{props.pokemons.map(pokemon => (
					<PokeCard name={pokemon.name} url={pokemon.url} key={pokemon.name} />
				))}
			</ul>
		</Layout>
	)
};

Index.getInitialProps = async function() {
	// const pokemons = [];
	// let next = 'https://pokeapi.co/api/v2/pokemon-species?limit=20';
	// while (next) {
	// 	const res = await fetch(next);
	// 	const data = await res.json();
	// 	pokemons.push(...data.results);
	// 	next = data.next;
	// }
	const pokemons = pokemonList;
	return { pokemons };
};

export default Index;