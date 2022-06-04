const { json, urlencoded } = require('express');
const express = require('express');
const server = express();
const userRoute = require('./src/routes');
require('dotenv').config();
// const dotenv = require('./src/config/.env');
require('dotenv').config({ path: 'src/config/.env' });
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 5000;
const BASE_API_URL = `http://${HOST}:${PORT}${'/api/v1'}`;

server.use(json());
server.use('/api/v1/users',userRoute);


server.listen(PORT,()=>{
    console.info('API Running at');
    console.info(`${'localhost:'} ${BASE_API_URL}`);
    console.info(`${'Users:'} ${`${BASE_API_URL}/users`}`);
});