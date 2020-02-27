import Link from "next/link";

const linkStyles = {
	marginRight: '1rem',
};

export default function Header() {
	return(
		<header>
			<nav>
				<Link href="/index">
					<a style={linkStyles}>Home Page</a>
				</Link>
				<Link href="/about">
					<a style={linkStyles}>About Page</a>
				</Link>
			</nav>
		</header>
	)
}