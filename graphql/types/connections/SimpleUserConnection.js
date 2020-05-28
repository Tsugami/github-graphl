const ConnectionType = require('../../util/ConnectionType');
const SimpleUserType = require('../SimpleUserType');

const SimpleUserConnectionType = new ConnectionType(
  {
    name: 'SimpleUserConnection',
  },
  SimpleUserType, 
  {
    pageInfo: (data) => data.pageInfo,
    nodes: (data) => data.users,
    totalCount: (data) => data.users.length,
  });

module.exports = SimpleUserConnectionType;