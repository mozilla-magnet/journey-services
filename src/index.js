const express = require('express');
const morganLogs = require('morgan');
const app = express();

app.use(morganLogs('combined'));
app.disable('x-powered-by');

app.use('/v1', require('./routes/resource'));
app.use(require('./routes/ops'));

app.use(require('./express/errorhandler'));

module.exports = app;
