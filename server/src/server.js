import './config'

import express from 'express'
import http from "http";
import socketIO from "socket.io";

import controller from './global/controller.js'
import errorIO from './global/error-handling.js'

const MAX_NAME_LENGTH = 32;
const MAX_TEXT_LENGTH = 1000;
const RATE_LIMIT_MESSAGES = 5;
const RATE_LIMIT_WINDOW_MS = 3000;

const expressApp = express();
expressApp.disable('x-powered-by');
expressApp.use(express.static(__dirname + '/public'));
//Global controller
expressApp.use('/',controller)
//Global error handler
expressApp.use(errorIO)


const server = http.createServer(expressApp);


// Same-origin only unless CORS_ORIGIN lists other origins (comma separated)
const corsOrigin = process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',').map(o => o.trim()) : false;

const socketioServer = new socketIO.Server(server, {
    cors: {origin: corsOrigin},
    maxHttpBufferSize: 16 * 1024 // chat messages are small; default is 1 MB
});

// Returns a clean {name, text} or null if the payload is not a valid chat message
const sanitizeMessage = (data) => {
    if (!data || typeof data.name !== 'string' || typeof data.text !== 'string') return null;
    const name = data.name.trim().slice(0, MAX_NAME_LENGTH);
    const text = data.text.trim().slice(0, MAX_TEXT_LENGTH);
    return name && text ? { name, text } : null;
}

socketioServer.on("connection", (socket) => {
    let windowStart = Date.now();
    let sentInWindow = 0;

    socket.on("message", (data) => {
        const now = Date.now();
        if (now - windowStart > RATE_LIMIT_WINDOW_MS) {
            windowStart = now;
            sentInWindow = 0;
        }
        if (++sentInWindow > RATE_LIMIT_MESSAGES) return;

        const message = sanitizeMessage(data);
        if (message) socketioServer.emit("message", message)
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
