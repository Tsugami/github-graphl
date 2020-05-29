const { github } = require('../../request');
const SimpleUserConnection = require('../util/SimpleUserConnection');

module.exports = ({ since, paginate: { page, perPage } }) =>
  github(`/users?since=${since}&page=${page}&per_page=${perPage}`)
    .then(users => 
      new SimpleUserConnection(users, users.length))