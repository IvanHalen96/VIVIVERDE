const dbConfig = {
    client: 'mysql',
    connection: {
      host: '127.0.0.1', // docker internal ip para container 
      database: 'localDatabase',
      user: 'root',
      password: 'localHost',
      port: 3901
    },
    migrations: {
      directory: '../migrations'
    }
  };

module.exports = dbConfig;