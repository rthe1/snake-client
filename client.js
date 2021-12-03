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


  setTimeout(() => {
    conn.on('connect', () => {
      conn.write("Move: up");
    });
    setTimeout(() => {
      conn.on('connect', () => {
        conn.write("Move: left");
      });
      setTimeout(() => {
        conn.on('connect', () => {
          conn.write("Move: up");
        });
        setTimeout(() => {
          conn.on('connect', () => {
            conn.write("Move: left");
          });
          setTimeout(() => {
            conn.on('connect', () => {
              conn.write("Move: up");
            });
          }, 50);
        },100);
      }, 150);
    }, 200);
  }, 250);
  

  

  
  conn.on('data', (data) => {
    console.log(data);
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect};