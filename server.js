
const app = require("./app");
const server = require('http').Server(app);
const io = require('socket.io')(server);

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
dotenv.config({ path: "config/config.env" });
const port = process.env.PORT || 5000;

connectDatabase();

//Listen for incoming WebSocket connections
// io.on('connection', socket => {
    // console.log('Client connected');
    // socket.emit('inventoryUpdate', Data);
//   });
  
module.exports = io;

//unhandled prommis rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.massage}`);
  console.log(`sutting the server due to unhadled promise rejection`);
  process.exit(1);
});

// Start the server
server.listen(port, () => {
  console.log(`server is working on http://localhost:${port}`);
});

//unhandled prommis rejection at mongodb
process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.massage}`);
  console.log(`sutting the server due to unhadled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
