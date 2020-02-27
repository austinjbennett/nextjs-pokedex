import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import fetch from 'isomorphic-unfetch';

const Post = props => (
	<Layout>
		<h1>{props.pokemon.name}</h1>
		{/*<p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>*/}
		{/*{props.show.image ? <img src={props.show.image.medium} /> : null}*/}
	</Layout>
);

Post.getInitialProps = async function(context) {
	console.log('context:', context);
	const url = context.query.url;
	console.log('url:', url);
	const res = await fetch(`${url}`);
	const pokemon = await res.json();

	return { pokemon };
};

export default Post;