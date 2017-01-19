const express = require('express');
const morganLogs = require('morgan');
const app = express();

app.use(morganLogs('combined'));
app.disable('x-powered-by');

app.use(require('./routes/ops'));

module.exports = app;
