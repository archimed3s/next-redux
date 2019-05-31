import * as next from 'next';
import * as express from 'express';
import jwt from 'express-jwt';
import cookieParser from 'cookie-parser';
import jwksRsa from 'jwks-rsa';

const checkJwt = jwt({
	secret: jwksRsa.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksUri: `https://pupil-test.eu.auth0.com/.well-known/jwks.json`
	}),
	audience: 'https://api.test.hellopupil.com',
	algorithms: ['RS256'],
	getToken: (req) => req.cookies.token
});

const port = parseInt(process.env.PORT || '2019', 10),
	dev = process.env.NODE_ENV !== 'production',
	app = next({
		dir: './src/client',
		dev
	}),
	handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();
	server.use(cookieParser());

	server.get('/health', (_req, res) => res.sendStatus(200));
	server.get('/*', checkJwt, (req, res) => {
		return handle(req, res);
	});

	server.listen(port, () => {
		console.warn(`> Server listening at http://localhost:${port} as ${dev ? 'development' : process.env.NODE_ENV}`);
	});
}).catch((e) => {
	console.error(e.stack);
	process.exit(1);
});
