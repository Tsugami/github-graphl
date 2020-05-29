const fetch = require('node-fetch');
const URL = 'https://api.github.com';

const bodyHandler = (data) => data.json();

const request = (url, method = 'GET') => {
  return fetch(url, { method }).then(bodyHandler);
}

const github = (endpoint, method) => request( URL + endpoint, method);


module.exports = { request, github, bodyHandler };