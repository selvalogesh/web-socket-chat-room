import './config'

import express from 'express'
import http from "http";
import socketIO from "socket.io";

import controller from './global/controller.js'
import errorIO from './global/error-handling.js'

const expressApp = express();
expressApp.use(express.static(__dirname + '/public'));
//Global controller
expressApp.use('/',controller)
//Global error handler
expressApp.use(errorIO)


const server = http.createServer(expressApp);


const socketioServer = new socketIO.Server(server, {
    cors: {origin: "*"}
});

socketioServer.on("connection", (socket) => {
    //console.log("user connected")

    socket.on("message", (data) => {
        //console.log(data);
        socketioServer.emit("message", data)
    })
})

//Start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3000;

server.listen(port, () => {
    console.log('Server environment: ' + process.env.NODE_ENV)
    const Dhost = server.address().address
    const Dport = server.address().port
    console.log('Server '+Dhost+' listening on port ' + Dport);
});