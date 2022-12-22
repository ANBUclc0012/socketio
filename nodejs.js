const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
    // ...
});

io.on("connection", (socket) => {
    console.log("New client connected");
});

httpServer.listen(3000);