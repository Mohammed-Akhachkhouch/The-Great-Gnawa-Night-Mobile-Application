import express from 'express';
import evevtroute from './src/routes/index.js';
import router from './src/routes/index.js';

const app = express();


app.use(express.json());
app.use(router);
app.use(evevtroute);


export default app;