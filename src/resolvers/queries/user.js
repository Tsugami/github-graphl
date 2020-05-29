const User = require('../types/User');
const { github } = require('../../request');

module.exports = ({ username }) => 
  github('/users/' + username)
    .then(user => new User(user));