import express from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';

import router from './app.route';

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.use('/', router);

export default app;
