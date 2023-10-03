/*const { Connection } = require("tedious")

const config ={
    server:'DESKTOP-Q6DB84O\SQLEXPRESS',
    authentication:{
        type:'default',
        options:{
            username:"Jorge",
            password:"123456789"
        }
    },
    options:{
        database:'VIVIVERDE',
        port: 1433,
        trustServerCertificate: true
    }
}
const connection = new Connection(config);

connection.connect();
connection.on('connect',(err)=>{
    if(err){
        console.log("Error al conectarse a la base de datos");
        console.log(err);
    }
    else{
        executeStatement();
    }
});

function executeStatement(){
    console.log("Conectado a la base de datos");
}*/

class ConnectionInstant {
  connectPromise = null;
  constructor() {
    var Connection = require("tedious").Connection;
    var config = {
      server: "DESKTOP-Q6DB84OSQLEXPRESS", //update me
      authentication: {
        type: "default",
        options: {
          userName: "Jorge", //update me
          password: "123456789", //update me
        },
      },
      options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: "VIVIVERDE", //update me
      },
    };
    var connection = new Connection(config);

    this.connectPromise = new Promise(function (resolve, reject) {
      connection.on("connect", function (err) {
        // If no error, then good to proceed.
        console.log("Connected");
        resolve(true);
      });

      connection.connect();
    });
  }
  async returnConnection() {
    return await this.connectPromise;
  }
}

module.export = ConnectionInstant;

//https://learn.microsoft.com/es-es/sql/connect/node-js/step-3-proof-of-concept-connecting-to-sql-using-node-js?view=sql-server-ver16
