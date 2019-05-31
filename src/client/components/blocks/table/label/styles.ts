import './colors';
import styled from 'styled-components';

function getLabelColor(theme: any, label: string) { // TODO: refactor theme type object any to be an interface
	switch (label) {
		case 'check':
			return theme.bgTableLabelCheck;
		case 'inProgress':
			return theme.bgTableLabelInProgress;
		case 'feedback':
			return theme.bgTableLabelFeedback;
		case 'qcRequest':
			return theme.bgTableLabelQcRequest;
		case 'qcInProgress':
			return theme.bgTableLabelQcInProgress;
		case 'unassigned':
			return theme.bgTableLabelUnassigned;
	}
}

export const SpanTableLabel = styled.span<{labelType: string}>`
	display: inline-block;
	padding: 4px 10px 2px 7px;
	border-radius: 4px;
	margin-right: 17px;
	background-color: ${({theme, labelType}) => getLabelColor(theme, labelType)};
	font-size: 12px;
	font-weight: 500;
	color: ${({theme, labelType}) => labelType === 'unassigned' ? theme.colorTableLabelUnassigned : theme.colorTableLabel};
`;

export const SpanTableLabelIcon = styled.span<{labelType?: string}>`
	display: inline-block;
	vertical-align: middle;
	width: 16px;
	margin-right: 7px;

	svg {
		fill: ${({theme, labelType}) => labelType === 'unassigned' ? theme.fillTableLabelUnassigned : theme.fillTableLabel};
	}
`;
