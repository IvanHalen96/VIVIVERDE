
const express = require('express');
const cors = require('cors'); // Import the cors package
const LoginRouter =  require('./routes/login.js');

// Back End

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

const backEnd = express();
backEnd.use(express.json());
backEnd.use(cors(corsOptions)) // Use this after the variable declaration
const portBack = 8002;
const server = backEnd.listen(portBack, function () {
  console.log(`BackEnd ${portBack}`);
});
const loginRouter = new LoginRouter();


backEnd.use('/login', loginRouter.getRouters());

server.headersTimeout = 965000;
server.keepAliveTimeout = 905000;

