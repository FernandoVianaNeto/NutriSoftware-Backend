const express = require('express');
const cors = require('cors');
require('dotenv/config');
const routes = require('./routes.ts');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333, () => console.log('listening on port 3333'));
