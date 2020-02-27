import { useRouter } from 'next/router';

import Layout from '../components/Layout';

function Content() {
	const router = useRouter();

	return (
		<>
			<h1>{router.query.title}</h1>
		</>
	)
}

export default function Post() {
	return (
		<Layout>
			<Content />
		</Layout>
	)
}