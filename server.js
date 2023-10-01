
import express from 'express';
import * as LoginRouter from './routes/login.js';

// Back End

const backEnd = express();
backEnd.use(express.json());
const portBack = 8001;
const server = backEnd.listen(portBack, function () {
  console.log(`BackEnd ${portBack}`);
});
backEnd.use('/login', LoginRouter.router);

server.headersTimeout = 965000;
server.keepAliveTimeout = 905000;

