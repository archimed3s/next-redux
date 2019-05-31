import * as style from './styles';
import Link from 'elements/link';
import logo from './icons/logo.svg?include';

export default () => <style.Header>
	<Link passHref href='/'>
		<style.ALogoHeader dangerouslySetInnerHTML={{__html: logo}} title='DP Dashboard logo'/>
	</Link>
	<style.NavHeader>
		<style.UlNavHeader>
			<li>
				<style.ALinkHeader href='#'>Forge</style.ALinkHeader>
			</li>
			<li>
				<style.ALinkHeader href='#'>Mission control</style.ALinkHeader>
			</li>
			<li>
				<Link passHref href='/'>
					<style.ALinkHeader title='DP Dashboard logo'>DP Dashboard</style.ALinkHeader>
				</Link>
			</li>
			<li>
				<style.ALinkHeader href='#'>Hive</style.ALinkHeader>
			</li>
		</style.UlNavHeader>
	</style.NavHeader>
	<style.ButtonHeader>
		<style.SpanPointHeader/>
	</style.ButtonHeader>
</style.Header>;
