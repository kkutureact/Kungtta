import express from 'express';
import log4js from 'log4js';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import LoginRouter from './routers/login';
import auth from './auth/auth';
import passport from 'passport';
import config from './config/main.json';
import cors from 'cors';
import WebSocket from 'ws';
import http from 'http';
import { Game } from './Game/index';

export const app = express();
export const logger = log4js.getLogger();
const port = 8080;

log4js.configure(__dirname + '/config/log4js.json');

const httpServer = http.createServer(app);
export const ws = new WebSocket.Server({ server: httpServer });

logger.level = 'ALL';

app.use(cors({ origin: config.webserver_host, credentials: true }));

app.use(cookieParser());
app.use(session({
    secret: config.session_secret,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

auth();
app.use(LoginRouter);

Game();

httpServer.listen(port, () => logger.info(`Endpoint server listening on ${port}`));