import 'dotenv/config';
import express from 'express';

import { bodyParser, contentType, cors, noCache } from './middlewares';
import { routes } from './routes';
import { env } from './config';
import { connect } from './database/connect';

const server = express();

server.use(cors);
server.use(bodyParser);
server.use(contentType);
server.use(noCache);
server.use(routes);

connect().then(() => {
    console.log('📦 Connected to Database!');
    server.listen(env.port, () => {
        console.log('🚀 Server started!');
        console.log(`Server runnning in ${env.apiUrl}/${env.port}`);
    });
}).catch((error) => {
    console.error(`Error connect to Database: ${error}`);
});
