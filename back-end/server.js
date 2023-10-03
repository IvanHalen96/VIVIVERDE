
const express = require('express');
const LoginRouter =  require('./routes/login.js');

// Back End

const backEnd = express();
backEnd.use(express.json());


backEnd.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})

const portBack = 8001;
const server = backEnd.listen(portBack, function () {
  console.log(`BackEnd ${portBack}`);
});
const loginRouter = new LoginRouter();
backEnd.use('/login', loginRouter.getRouters());

server.headersTimeout = 965000;
server.keepAliveTimeout = 905000;