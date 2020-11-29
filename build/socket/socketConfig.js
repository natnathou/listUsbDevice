"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var usb_1 = __importDefault(require("usb"));
var PORT_SOCKET = 5001;
var app = express_1.default();
var server = http_1.default.createServer(app);
var io = require('socket.io')(server, {
    cors: {
        origin: '*',
    },
});
require('events').EventEmitter.defaultMaxListeners = 25;
io.on('connection', function (socket) {
    console.log('Client is connected');
    usb_1.default.on('attach', function (data) {
        console.log('usb has been attached');
        socket.emit('usb_adding', data);
    });
    usb_1.default.on('detach', function (data) {
        console.log('usb has been removed');
        socket.emit('usb_removing', data);
    });
    socket.on('disconnect', function () {
        console.log('Client is disconnected');
    });
});
server.listen(PORT_SOCKET, function () {
    console.log("Listening on port " + PORT_SOCKET);
});
