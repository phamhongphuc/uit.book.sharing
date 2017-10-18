import express from 'express';
import SocketIO from 'socket.io';
import moment from 'moment';
import http from 'http';
import chalk from 'chalk';

import AppExpress from './express/express';
import AppSocket from './socket/socket';
import AppConfig from './config/config';

const app = express();
const port = process.env.PORT || 5;
const server = http.createServer(app);
const io = SocketIO(server);

console.log(chalk.bgMagenta(
    process.env.NODE_ENV === 'development'
        ? '\n ----- [ Development Environment ] ----- '
        : '\n ----- [ Productions Environment ] ----- '
));

AppConfig(app, io);
AppExpress(app);
AppSocket(io);

server.listen(port);

console.log(
    '   '
    + chalk.underline.bgCyan(' http://ai.ai:' + port + ' - Lúc: ' + moment().format('hh:mm:ss') + ' ')
);