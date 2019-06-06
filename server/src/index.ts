import express from 'express';
import log4js from 'log4js';
import cookieParser from 'cookie-parser';
import WebSocket from 'ws';
import http from 'http';
import config from './config/main.json';
import OnlinesRouter from './route';
import { Game } from './Game/index';
import cors from 'cors';

export const app = express();
export const logger = log4js.getLogger();
const port = config.port;

log4js.configure(__dirname + '/config/log4js.json');

const httpServer = http.createServer(app);
export const ws = new WebSocket.Server({ server: httpServer });

logger.level = 'ALL';

app.use(cors({ origin: config.webserver_host, credentials: true }));

app.use(express.json());
app.use(cookieParser());

Game();

app.use(OnlinesRouter);

httpServer.listen(port, () => logger.info(`Game server listening on ${port}`));
