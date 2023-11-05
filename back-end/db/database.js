const dbConfig = {
    client: 'mysql',
    connection: {
      host: '127.0.0.1', // docker internal ip para container 
      database: 'vivi-verdedb',
      user: 'root',
      password: 'elhumorcordobes1',
      port: 3307
    },
    migrations: {
      directory: '../migrations'
    }
  };

module.exports = dbConfig; 
