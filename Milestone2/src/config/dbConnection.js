var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit:1,
    host: "localhost",
    user: "root",
    password: "deep70",
    database:"node"
});
pool.getConnection((err,connection)=> {
  if(err) throw err;
  console.log('Database connected successfully');
  connection.release();
});

module.exports = pool;
