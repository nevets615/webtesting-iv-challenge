const express = require("express");

const guestRouter = require('./data/router/guest-router.js')


const server = express();

server.use(express.json());

server.use('/api/guest', guestRouter);


 
module.exports = server;