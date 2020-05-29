const SimpleUser = require('../types/SimpleUser');
const ConnectionResolver = require('./ConnectionResolver');

module.exports = class SimpleUserConnection extends ConnectionResolver {
  constructor (users, totalCount) {
    super(users.map(u => new SimpleUser(u)), totalCount)
  }
}