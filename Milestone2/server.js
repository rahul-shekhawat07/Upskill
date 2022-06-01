const express = require('express');
const server = express();
const userRoute = require('./src/routes');
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 5000;
const BASE_API_URL = `http://${HOST}:${PORT}${'/api/v1'}`;

server.use('/api/v1/users',userRoute);
// server.use('/api/v1/users/{id}',userRoute);

server.listen(PORT,()=>{
    console.info('API Running at');
    console.info(`${'localhost:'} ${BASE_API_URL}`);
    console.info(`${'Users:'} ${`${BASE_API_URL}/users`}`);
});