import express from 'express';
import log4js from 'log4js';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import LoginRouter from './routers/login';
import auth from './auth/auth';
import passport from 'passport';
import config from './config/main.json';

export const app = express();
export const logger = log4js.getLogger();
const port = 8080;

logger.level = 'ALL';

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

app.listen(port, () => logger.info(`Endpoint server listening on ${port}`));
