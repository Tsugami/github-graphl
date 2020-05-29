const SimpleUser = require('./types/SimpleUser');
const User = require('./types/User');

const users = require('./queries/users');
const user = require('./queries/user');

module.exports = {
  SimpleUser,
  User,
  users,
  user,
};