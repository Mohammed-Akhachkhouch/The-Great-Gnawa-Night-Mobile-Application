import express from 'express';
import evevtroute from './src/routes/index.js';

const app = express();


app.use(express.json());
app.use(evevtroute);


export default app;