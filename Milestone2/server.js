import express, { json, urlencoded } from 'express';
import routes from './src/routes';
const server = express();
require('dotenv').config({ path: 'src/config/.env' });
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 5000;
const BASE_API_URL = `http://${HOST}:${PORT}${'/api/v1'}`;

server.use(json());
server.use('/api/v1/users', routes.userRoute);
server.use('/api/v1/products', routes.productRoute);


server.listen(PORT, () => {
    console.info('API Running at');
    console.info(`${'localhost:'} ${BASE_API_URL}`);
    console.info(`${'Users:'} ${`${BASE_API_URL}/users`}`);
    console.info(`${'Products:'} ${`${BASE_API_URL}/products`}`);
});