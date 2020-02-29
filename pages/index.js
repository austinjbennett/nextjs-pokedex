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
	// const pokemons = [];
	// let next = 'https://pokeapi.co/api/v2/pokemon?limit=20';
	// while (next) {
	// 	const res = await fetch(next);
	// 	const data = await res.json();
	// 	pokemons.push(...data.results);
	// 	next = data.next;
	// }
	const pokemons = pokemonList.splice(0, 30);
	// console.log('pokemons:', pokemons);
	return { pokemons };
};

export default Index;