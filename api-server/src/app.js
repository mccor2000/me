import express from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
// import helmet from 'helmet';
import compression from 'compression';

import routes from './app.route';
import config from './app.config';
import { mongoose } from './app.datasource';

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());
// app.use(helmet());
app.use(compression());

app.use('/', routes);

app.config = config;
app.datasources = { mongoose };

export default app;
