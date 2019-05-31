import App, {Container, NextAppContext} from 'next/app';
import Head from 'next/head';
import {ReactNode} from 'react';
import {ThemeProvider} from 'styled-components';
import theme from 'common/styles/theme';
import Layout from 'blocks/layout';

class MyApp extends App {
	public static async getInitialProps({Component, ctx}: NextAppContext) {

		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return {
			pageProps
		};
	}

	public render(): ReactNode {
		const {Component, pageProps} = this.props;

		return <Container>
			<Head>
				<title>DP Dashboard</title>
			</Head>
			<ThemeProvider theme={theme.main}>
				<Layout>
					<Component {...pageProps}/>
				</Layout>
			</ThemeProvider>
		</Container>;
	}
}

export default MyApp;
