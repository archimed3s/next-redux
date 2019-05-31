import * as layout from './styles';
import GlobalStyles from 'common/styles/global';
import Header from 'blocks/header';

// TODO: refactor to children return element interface
export default ({children}: any) => <>
	<GlobalStyles/>
	<Header/>
	<layout.Content>
		{children}
	</layout.Content>
</>;
