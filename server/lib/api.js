const Promise = require('bluebird');

const API = {};

API.sendResponse = function(statusCode, res) {
  return function(body) {
    res.status(statusCode).json(body);
  }
};

API.notFound = function(req, res, next) {
  res.status(404).json({ message: 'Not Found' });
};

API.handleErrors = function(err, req, res, next) {
  err.status = err.status || 500;
  err.message = err.message || 'Server error';
  res.status(err.status).json({ message: err.message });
};

module.exports = API;
