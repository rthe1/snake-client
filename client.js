const net = require("net");
const {IP, PORT} = require('./constants')

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.on('connect', () => {
    console.log("Aaaannnd We're In...")
  })

  conn.on('connect', () => {
    conn.write("Name: 007");
  });
  
  conn.on('data', (data) => {
    console.log(data);
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

// setup interface to handle user input from stdin


module.exports = {connect};