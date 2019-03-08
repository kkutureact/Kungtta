import express from 'express';
import log4js from 'log4js';

const app = express();
const logger = log4js.getLogger();
const port = 8080;

logger.level = 'ALL';

app.listen(port, () => logger.info(`Endpoint server listening on ${port}`));
