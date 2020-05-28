const fetch = require('node-fetch');
const URL = 'https://api.github.com';

const request = (url, method = 'GET') => {
  return fetch(url, { method });
}

const github = (endpoint, method) => request( URL + endpoint, method);

const bodyHandler = (data) => data.json();

module.exports = { request, github, bodyHandler };