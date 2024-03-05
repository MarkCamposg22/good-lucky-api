import 'dotenv/config';
import express from 'express';

import { bodyParser, contentType, cors, noCache } from './middlewares';
import { routes } from './routes';
import { env } from './config';

const server = express();

server.use(cors);
server.use(bodyParser);
server.use(contentType);
server.use(noCache);
server.use(routes);

server.listen(env.port, () => {
    console.log('🚀 Server started!');
    console.log(`${env.apiUrl}/${env.port}`);
});
