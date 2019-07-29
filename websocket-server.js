var WebSocketServer = require("websocket").server;
var http = require("http");

var server = http.createServer(function(request, response) {});
server.listen(1337, function() {});

// create the server
wsServer = new WebSocketServer({
  httpServer: server
});

// WebSocket server
wsServer.on("request", function(request) {
  var connection = request.accept(null, request.origin);

  // all messages from users here.
  connection.on("message", function(message) {
    console.log("message from client : ", message);
    if (message.type === "utf8") {
      // process WebSocket message
    }
    connection.send("Yes : got your request");
  });

  connection.on("close", function(connection) {
    // close user connection
  });
});
