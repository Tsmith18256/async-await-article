'use strict';

let db = require('./config/mongoose')();
let app = require('./config/express')();

process.env.PORT = process.env.PORT || 3000;

app.listen(process.env.PORT);
module.exports = app;

console.log(`Server running at http://localhost:${process.env.PORT}/`);