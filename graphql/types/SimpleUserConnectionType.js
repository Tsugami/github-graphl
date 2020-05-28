const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
} = require('graphql');

const PaginationType = require('./PaginationType');
const SimpleUserType = require('./SimpleUserType');

const SimpleUserConnectionType = new GraphQLObjectType({
  name: 'SimpleUserConnection',
  fields: () => ({
    pageInfo: {
      type: PaginationType,
      resolve: (data) => data.pageInfo,
    },
    nodes: {
      type: GraphQLList(SimpleUserType),
      resolve: (data) => data.users,
    },
    totalCount: {
      type: GraphQLInt,
      resolve: (data) => data.users.length,
    }
  }),
});

module.exports = SimpleUserConnectionType;