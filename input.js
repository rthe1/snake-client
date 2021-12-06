let connection;

const setupInput = function (conn) {
  const stdin = process.stdin;
  let connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  const handleUserInput = function (data) {
  
    if (data === '\u0003') {
      process.exit();
    }

    if (data === 'w') {
      console.log("Move: up")
      connection.write("Move: up")
    }
  
    if (data === 's') {
      console.log("Move: down")
      connection.write("Move: down")
    }

    if (data === 'a') {
      console.log("Move: left")
      connection.write("Move: left")
    }
  
    if (data === 'd') {
      console.log("Move: right")
      connection.write("Move: right")
    }

  // your code here
};

  stdin.on("data", handleUserInput);

  
  return stdin;
};



module.exports = {setupInput}