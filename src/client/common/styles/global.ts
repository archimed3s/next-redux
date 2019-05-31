import {createGlobalStyle} from 'styled-components';
import graphikWoff2 from 'assets/fonts/Graphik-Regular-Web.woff2';
import graphikWoff from 'assets/fonts/Graphik-Regular-Web.woff';
import graphiMediumkWoff2 from 'assets/fonts/Graphik-Medium-Web.woff2';
import graphiMediumkWoff from 'assets/fonts/Graphik-Medium-Web.woff';

const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: 'Graphik';
		font-weight: 400;
		font-style: normal;

		src: url(${graphikWoff2}) format('woff2'),
		url(${graphikWoff}) format('woff');
	}

	@font-face {
		font-family: 'Graphik';
		font-weight: 500;
		font-style: normal;

		src: url(${graphiMediumkWoff2}) format('woff2'),
		url(${graphiMediumkWoff}) format('woff');
	}

	body, h1, h2, h3, h4, h5, h6, p, ul {
		margin: 0;
	}

	body {
		font-family: 'Graphik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Oxygen-Sans, 'Fira Sans', 'Droid Sans', Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		* {
			box-sizing: border-box;
		}
	}

	table {
		border-collapse: collapse;
	}

	ul {
		padding: 0;
		list-style: none;
	}

	img {
		width: 100%;
		height: auto;
	}

	button {
		padding: 0;
		border: 0;
		background: none;
	}

	a {
		text-decoration: none;
	}

	a,
	button,
	input {
		transition: all .3s ease;

		&:focus {
			outline: none;
		}
	}

	#__next {

		@media all and (min-width: 812px) and (max-width: 896px) and (max-height: 414px) {
			padding-left: 22px;
			padding-right: 22px;
		}
	}
`;

export default GlobalStyles;
