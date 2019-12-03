import express from 'express'
import { config } from './config/config';

console.log(config)
const app = express();
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world stang')
});

app.listen(config.port);
