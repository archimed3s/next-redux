import * as style from './styles';
import Progress from './progress';
import iconStar from './icons/star.svg?include';

export default () => <section>
	<style.DivTableHeader>
		<style.SpanTableHeaderText>SLA</style.SpanTableHeaderText>
		<style.SpanTableHeaderText>Property</style.SpanTableHeaderText>
		<style.SpanTableHeaderText>Images</style.SpanTableHeaderText>
		<style.SpanTableHeaderText>Floorplans</style.SpanTableHeaderText>
		<style.SpanTableHeaderText>VR Experience</style.SpanTableHeaderText>
	</style.DivTableHeader>
	<style.DivTableBody>
		<style.DivTableBodyCellTime>
			<div>
				<style.SpanTableBodyCurrentTime>14:06</style.SpanTableBodyCurrentTime>
				<style.SpanTableBodyStartedTime>3h 23m</style.SpanTableBodyStartedTime>
			</div>
			<style.DivTableBodyImage>
				<img src='https://picsum.photos/100/64?random' alt='Property Image'/>
			</style.DivTableBodyImage>
		</style.DivTableBodyCellTime>
		<div>
			<style.H3TableBodyTitle>
				<style.SpanTableBodyIconStart dangerouslySetInnerHTML={{__html: iconStar}}/>
				22 Chancery Lane, SW2 8DZ, London
			</style.H3TableBodyTitle>
			<style.SpanTableBodyStreet>
				Est. 1216 sqft.
				{' '}
				<style.SpanTableBodyStreetLight>JLL - Greenwich</style.SpanTableBodyStreetLight>
			</style.SpanTableBodyStreet>
		</div>
		<Progress progress='check'/>
		<Progress progress='inProgress'/>
		<Progress progress='unassigned'/>
	</style.DivTableBody>
</section>;
