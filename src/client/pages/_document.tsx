import Document, {Head, Main, NextDocumentContext, NextScript} from 'next/document';
import {ReactNode} from 'react';
import {ServerStyleSheet} from 'styled-components';

export default class MyDocument extends Document {
	public static async getInitialProps(ctx: NextDocumentContext) {
		const sheet = new ServerStyleSheet(),
			originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () => originalRenderPage({
				enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
			});

			const initialProps = await Document.getInitialProps(ctx);

			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				)
			};
		} finally {
			sheet.seal();
		}
	}

	public render(): ReactNode {
		return <html lang='en'>
			<Head>
				<meta charSet='utf-8'/>
				<meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
				<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover'/>
				<link rel='icon' href='/static/favicon.ico'/>
			</Head>
			<body>
				<Main/>
				<NextScript/>
			</body>
		</html>;
	}
}
