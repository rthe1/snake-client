const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: '50541',
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

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  stdin.on("data", handleUserInput());
  setupInput();
  return stdin;
};

const handleUserInput = function (data) {
  process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });

  // your code here
};


module.exports = {connect};