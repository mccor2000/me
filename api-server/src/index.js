import express from 'express';
import {json, urlencoded} from 'body-parser';
import cors from 'cors';

const app = express();

app.use(json());
app.use(urlencoded({extended: true}));
app.use(cors());

app.get('/', async (req, res) => {
  res.send('hello world');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
