import * as next from 'next';
import * as express from 'express';
import * as request from 'request-promise-native';
import * as cookieParser from 'cookie-parser';

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

	server.get('/orders', (req, res) => {
    const authHeader = `Bearer ${req.cookies.accessToken}`;
    console.log(authHeader);
    if (!authHeader) {
    	res.status(403).send('No Auth Token');
    }
    const query = {
        url: `http://apiproxy.test.hellopupil.com/order/v1/orders`,
        method: 'GET',
        headers: {
            Authorization: authHeader
        },
        json: true,
        qsStringifyOptions: {arrayFormat: 'repeat'}
    };

    request(query).promise().then(orders => res.send(orders)).catch(err => console.log(err));
	});

 	/* Client routes */
	server.get('/*', (req, res) => {
		return handle(req, res);
	});

	server.listen(port, () => {
		console.warn(`> Server listening at http://localhost:${port} as ${dev ? 'development' : process.env.NODE_ENV}`);
	});
}).catch((e) => {
	console.error(e.stack);
	process.exit(1);
});
