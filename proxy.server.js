const proxy = require('http-proxy-middleware');
const Bundler = require('parcel-bundler');
const express = require('express');
let bundler = new Bundler('./index.html');
let app = express();

app.use(
  '/api',
  proxy({
    target: 'http://localhost:3001'
  })
);

app.use(bundler.middleware());

app.listen(Number(process.env.PORT || 3200));