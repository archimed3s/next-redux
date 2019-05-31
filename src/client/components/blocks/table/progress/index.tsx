import * as style from './styles';
import Label from 'blocks/table/label';

interface ILabelType {
	progress: string;
}

export default ({progress}: ILabelType) => <style.DivTableProgress progress={progress}>
	<div>
		<Label labelType={progress}/>
		<style.SpanTableProgressAssignedTime>12:03 {' '}
			<style.SpanTableProgressAssignedText>Approved by</style.SpanTableProgressAssignedText>
			{' '}<style.StrongTableProgressAssignedName>Harry</style.StrongTableProgressAssignedName>
		</style.SpanTableProgressAssignedTime>
	</div>
	<div>
		<div>
			<style.ImgTableProgressImage src='https://picsum.photos/24/24?random' alt='Avatar Image'/>
		</div>
		<button></button>
	</div>
</style.DivTableProgress>;
