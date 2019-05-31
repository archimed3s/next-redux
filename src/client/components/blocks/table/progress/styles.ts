import './colors';
import styled from 'styled-components';

export const DivTableProgress = styled.div<{progress?: string}>`
	position: relative;
	display: flex;
	justify-content: space-between;

	&:before {
		content: '';
		position: absolute;
		top: calc(0px - 14px);
		left: -20px;
		height: calc(100% + 27px);
		border-left: 1px solid ${({theme}) => theme.borderTableProgress};
	}
`;

export const SpanTableProgressAssignedTime = styled.span`
	display: block;
	padding-top: 7px;
	font-size: 12px;
	color: ${({theme}) => theme.colorTableProgressLightText};
`;

export const SpanTableProgressAssignedText = styled.span`
	font-weight: 500;
`;

export const StrongTableProgressAssignedName = styled.strong`
	color: ${({theme}) => theme.colorTableProgressDarkText};
`;

export const ImgTableProgressImage = styled.img`
	border: solid 1px ${({theme}) => theme.borderTableProgressImage};
	border-radius: 50%;
`;
