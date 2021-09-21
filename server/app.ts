import express from 'express';
import cors from 'cors';
import http from 'http';

const Express = express();
const app = http.createServer(Express);

Express.use(cors({ origin: '*' }));

const server = app.listen(4000, () => console.log('Listening on port 4000'));

process.on('SIGINT', () => {
  server.close(() => {
    console.log('Express server closed.');
  });
});
