import Link from 'next/link';
import fetch from "isomorphic-unfetch";
import Router from 'next/router';
import { Button, TextField } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const navStyles = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
};
const linkStyles = {
	marginRight: '1rem',
	textDecoration: 'none',
	fontSize: 24,
	fontFamily: 'Helvetica, Arial, sans-serif',
};
const formStyles = {
	display: 'flex',
};
const buttonStyles = {
	marginLeft: 15,
};
const theme = createMuiTheme({
	palette: {
		primary: green,
	},
});


export default function Header() {
	const randomNum = Math.floor(Math.random() * Math.floor(807));

	const submitForm = (e) => {
		e.preventDefault();
		const searchTerm = document.getElementById('pokesearch').value;
		Router.push(`/pokemon/${searchTerm}`);
	};
	return(
		<header>
			<nav style={navStyles}>
				<div>
					<Link href="/index">
						<a style={linkStyles}>All Pokémon</a>
					</Link>
					<Link href='/pokemon/[name]' as={`/pokemon/${randomNum}`}>
						<a style={linkStyles}>Random Pokémon</a>
					</Link>
					<style jsx>{`
						a {
							transition: all .2s;
							color: black;
						}
						a:hover {
							color: green;
						}
		            `}</style>
				</div>
				<ThemeProvider theme={theme}>
					<form onSubmit={submitForm} style={formStyles}>
						<TextField id="pokesearch" name="pokesearch" label="Search For A Pokemon" variant="filled" />
						<Button type="submit" variant="contained" color="primary" size="large" style={buttonStyles}>Search</Button>
					</form>
				</ThemeProvider>
			</nav>
		</header>
	)
}