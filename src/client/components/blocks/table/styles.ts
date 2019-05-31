import './colors';
import styled from 'styled-components';

export const DivTableHeader = styled.div`
	display: grid;
	grid-template-columns: minmax(175px, 225px) minmax(290px, 20%) repeat(3, 1fr);
	grid-column-gap: 40px;
	padding: 0 20px 0 40px;
`;

export const SpanTableHeaderText = styled.span`
	font-size: 16px;
	font-weight: 500;
	color: ${({theme}) => theme.colorTableLightText};
`;

export const DivTableBody = styled.div`
	display: grid;
	grid-template-columns: minmax(175px, 225px) minmax(290px, 20%) repeat(3, 1fr);
	grid-column-gap: 40px;
	align-items: center;
	padding: 4px 20px 4px 40px;

	&:nth-child(even) {
		background-color: ${({theme}) => theme.bgTableCell};
	}
`;

export const DivTableBodyCellTime = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const SpanTableBodyCurrentTime = styled.span`
	display: block;
	padding-bottom: 6px;
	font-size: 16px;
	font-weight: 500;
	color: ${({theme}) => theme.colorTableDarkText};
`;

export const SpanTableBodyStartedTime = styled.span`
	font-size: 12px;
	font-weight: 500;
	color: ${({theme}) => theme.colorTableLightText};
`;

export const DivTableBodyImage = styled.div`
	width: 100px;
	height: 64px;
	border-radius: 4px;
	overflow: hidden;
`;

export const H3TableBodyTitle = styled.h3`
	position: relative;
	padding-bottom: 6px;
	font-size: 16px;
	font-weight: 500;
	color: ${({theme}) => theme.colorTableDarkText};
`;

export const SpanTableBodyIconStart = styled.span`
	position: absolute;
	top: 0;
	left: -17px;
	width: 14px;

	svg {
		fill: ${({theme}) => theme.fillIconStartTable};
	}
`;

export const SpanTableBodyStreet = styled.span`
	font-size: 12px;
	font-weight: 500;
	color: ${({theme}) => theme.colorTableDarkText};
`;

export const SpanTableBodyStreetLight = styled.span`
	color: ${({theme}) => theme.colorTableLightText};
`;
