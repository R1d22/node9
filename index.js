const path = require('path');
const express = require('express');
const axios = require('axios');
const mainRoute = require('./routes/main.js');
const barRoute = require('./routes/bar.js');
const testRoute = require('./routes/test.js');



const server = express();

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');
server.use(express.static(path.join(__dirname, 'public')));
server.use('/', mainRoute);
server.use('/test', testRoute);
server.use('/bar', barRoute);


server.listen(9000);