if (!process.env.NODE_ENV) require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

module.exports = function() {

  app.set('port', process.env.PORT || 3000);
  app.use(express.static(path.resolve(__dirname, '../../client/dist/')));
  app.use(bodyParser.json());

  if (process.env.NODE_ENV === 'development') {
    app.use(require('morgan')('dev'));
  }

  return app;
};
