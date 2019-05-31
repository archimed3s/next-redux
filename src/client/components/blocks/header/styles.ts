import './colors';
import styled from 'styled-components';

export const Header = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	display: grid;
	grid-template-columns: 100px auto 25px;
	grid-column-gap: 75px;
	align-items: center;
	padding: 0 30px 0 25px;
	background-color: ${({theme}) => theme.bgHeader};
`;

export const ALogoHeader = styled.a`
	display: block;

	svg {
		fill: ${({theme}) => theme.fillLogoHeader};
	}
`;

export const NavHeader = styled.nav`
	justify-self: start;
`;

export const UlNavHeader = styled.ul`
	display: grid;
	grid-template-columns: repeat(4, auto);
	grid-column-gap: 50px;
`;

export const ALinkHeader = styled.a`
	display: block;
	padding: 21px 0;
	white-space: nowrap;
	font-size: 18px;
	color: ${({theme}) => theme.colorLinkHeader};

	&:hover,
	&.active {
		color: ${({theme}) => theme.colorLinkHoverActiveHeader};
	}

	&.active {
		font-weight: 500;
	}
`;

export const ButtonHeader = styled.button`
	position: relative;
	width: 100%;
	height: 25px;
`;

export const SpanPointHeader = styled.span`
	&&,
	&:before,
	&:after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background-color: ${({theme}) => theme.bgPointHeader};
		transform: translate(-50%, -50%);
	}

	&:before {
		top: -100%;
	}

	&:after {
		top: 200%;
	}
`;
