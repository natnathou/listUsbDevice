const express = require('express');
const router = require('./routes');
const cors = require('cors');

const PORT = 5000;
const root = require('./routes/index');

const app = express();
app.use(
  cors({
    origin: `http://localhost:3000`, // allow to server to accept request from different origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // allow session cookie from browser to pass through
  })
);
app.use('/server', root);
require('./socket/socketConfig');

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
