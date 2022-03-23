let connect = function(){
  if (global.connection){
    return global.connection.connect();
  }

  const { Pool } = require("pg");
  const pool = new Pool({
    connectionString: "postgres://lubhqkhn:nlysSdGut6JA5iDS-BTPHSu3qQlS1RQQ@kesavan.db.elephantsql.com/lubhqkhn"
  });

  global.connection = pool 
  return poll.connection();
}

module.exports = { connect }