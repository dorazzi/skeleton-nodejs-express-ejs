let connect = function(){
  if (global.connection){
    return global.connection.connect();
  }

  const {Pool} = require("pg");
  const pool = new Pool({
    connectionString: "postgres://mwvfrzsi:shTvqRIcrUL5t9-PAjcpTz-BrkwG2kTr@kesavan.db.elephantsql.com/mwvfrzsi"
  });

  global.connection = pool 
  return pool;
}

module.exports = { connect }