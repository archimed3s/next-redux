import * as style from './styles';
import iconCheck from './icons/check.svg?include';
import iconInProgress from './icons/in-progress.svg?include';
import iconFeedback from './icons/feedback.svg?include';
import iconQc from './icons/qc.svg?include';
import iconMagnifier from './icons/magnifier.svg?include';
import iconUnassigned from './icons/unassigned.svg?include';

interface ILabelType {
	labelType: string;
}

export default ({labelType}: ILabelType) => {
	switch (labelType) {
		case 'check':
			return (<style.SpanTableLabel labelType={labelType}>
				<style.SpanTableLabelIcon dangerouslySetInnerHTML={{__html: iconCheck}}/>
				QC Passed
			</style.SpanTableLabel>
			);
		case 'inProgress':
			return (<style.SpanTableLabel labelType={labelType}>
					<style.SpanTableLabelIcon dangerouslySetInnerHTML={{__html: iconInProgress}}/>
					In Progress
				</style.SpanTableLabel>
			);
		case 'feedback':
			return (<style.SpanTableLabel labelType={labelType}>
					<style.SpanTableLabelIcon dangerouslySetInnerHTML={{__html: iconFeedback}}/>
					Corrections Needed
				</style.SpanTableLabel>
			);
		case 'qcRequest':
			return (<style.SpanTableLabel labelType={labelType}>
					<style.SpanTableLabelIcon dangerouslySetInnerHTML={{__html: iconQc}}/>
					Requested QC
				</style.SpanTableLabel>
			);
		case 'qcInProgress':
			return (<style.SpanTableLabel labelType={labelType}>
					<style.SpanTableLabelIcon dangerouslySetInnerHTML={{__html: iconMagnifier}}/>
					QC In Progress
				</style.SpanTableLabel>
			);
		case 'unassigned':
			return (<style.SpanTableLabel labelType={labelType}>
					<style.SpanTableLabelIcon dangerouslySetInnerHTML={{__html: iconUnassigned}} labelType={labelType}/>
					Unassigned
				</style.SpanTableLabel>
			);
		default:
			return null;
	}
};
