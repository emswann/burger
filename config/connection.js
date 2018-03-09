var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection =  mysql.createConnection({
    port: 3308,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burgers_db'
  });
};

connection.connect(err =>
  err ? console.error('Error connecting: ' + err.stack)
      : console.log('Connected as id: ' + connection.threadId)
);

module.exports = connection;
